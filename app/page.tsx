import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "StreamLine - Simplify Your Workflow",
  description:
    "StreamLine is a powerful SaaS platform that helps you streamline your business processes and boost productivity.",
}

export default function Home() {
  return <HomeClient />
}

