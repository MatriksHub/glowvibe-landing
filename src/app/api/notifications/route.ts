import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";



export async function GET() {
    const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .order("created_at", { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ notifications: data });
}

export async function POST(req: Request) {
    const { title, message } = await req.json();
  
    const { data, error } = await supabase
    .from("notifications")
    .insert([{ title, message, status: "draft" }])
    .select();
  
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  
    return NextResponse.json({ notification: data[0] });
}
  
export async function PATCH(req: Request) {
    const { id, title, message } = await req.json();
  
    const { error } = await supabase
    .from("notifications")
    .update({ title, message })
    .eq("id", id);
  
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  
    return NextResponse.json({ message: "Notification updated successfully!" });
}
  
export async function DELETE(req: Request) {
    const { id } = await req.json();
  
    const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);
  
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  
    return NextResponse.json({ message: "Notification deleted!" });
}
  