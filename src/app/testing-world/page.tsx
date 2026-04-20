import Playground from "../../../Playground";

// Metadata for the sandbox (SEO focused but hidden)
export const metadata = {
  title: "Testing World | Sandbox",
  description: "Experimental high-fidelity sandbox.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestingWorldPage() {
  return <Playground />;
}
