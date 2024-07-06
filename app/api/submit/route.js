import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function POST(req) {
  const { name, phone, address, city, size, color, type } = await req.json();
  const { topPrice, labsaKemla } = type === 'topPrice' ? '20DT' : '54DT';

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  console.log('POSTGRES_URL:', process.env.POSTGRES_URL);

  try {
    await client.connect();

    const query = `
      INSERT INTO product (name, phone, address, city, size, color, type)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [name, phone, address, city, size, color, type];

    await client.query(query, values);

    await client.end();

    return NextResponse.json({ message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error inserting data:', error.message);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
