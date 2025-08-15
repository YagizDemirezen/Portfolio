import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Tüm alanları doldurun' }, { status: 400 });
    }

    const { data, error } = await supabase.from('contact_messages').insert([{
      name: firstName,
      surname: lastName,
      email,
      message,
      ip: req.headers.get('x-forwarded-for') || 'unknown',
      user_agent: req.headers.get('user-agent') || 'unknown'
    }]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: 'Veritabanına kaydedilemedi' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Bir hata oluştu' }, { status: 500 });
  }
}
