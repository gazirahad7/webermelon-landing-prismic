import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import Bounded from "./Bounded";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");
  const navItems = settings.data.items[0]?.item || [];

  console.log("navigation data:", settings);

  return (
    <Bounded as="header" className="py-4 md:py-6 lg:py-8">
      <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
        <Link href="/">
          {/* <Icon /> */}
          <Image
            src="https://images.prismic.io/webermelon/aKbFmqTt2nPbaj0z_webermelon-logo.png?auto=format,compress"
            alt="LOGO"
            width={160}
            height={40}
            priority
          />
        </Link>

        <nav>
          <ul className="flex gap-4">
            {navItems.map(({ key, text }) => (
              <li key={key}>
                {/* Replace "#" with your real href if you have link field */}
                <PrismicNextLink
                  field={{
                    link_type: "Web",
                    url: `/${(text ?? "").toLowerCase()}`,
                  }}
                  className="p-3 hover:underline"
                >
                  {text ?? ""}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
