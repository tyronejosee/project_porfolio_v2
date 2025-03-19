import { NextResponse } from "next/server";
import { messageNotifier } from "@/lib/observer";
import { DiscordObserver } from "@/lib/dicord";

export async function POST(req: Request) {
  try {
    messageNotifier.subscribe(DiscordObserver);

    const data = await req.json();
    await messageNotifier.notify(data);

    return NextResponse.json({ message: "Notificación enviada" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error procesando la solicitud" },
      { status: 500 }
    );
  }
}
