// import React from "react";
// import { createClient } from "@/prismicio";

// export default async function Header() {
//   const client = createClient();
//   const settings = await client.getSingle("settings");
//   console.log("navigation data:", settings);

//   return <div>Header</div>;
// }

import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Icon from "./Logo";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");
  const navItems = settings.data.items[0]?.item || [];

  console.log("navigation data:", settings);

  return (
    <Bounded as="header" className="py-4 md:py-6 lg:py-8">
      <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
        <Link href="/">
          <Icon />
        </Link>

        <nav>
          <ul className="flex gap-4">
            {navItems.map(({ key, text }) => (
              <li key={key}>
                {/* Replace "#" with your real href if you have link field */}
                <PrismicNextLink
                  field={{ link_type: "Web", url: `/${text.toLowerCase()}` }}
                  className="p-3 hover:underline"
                >
                  {text}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
