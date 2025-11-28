"use client";

import {Accordion, AccordionItem} from "@nextui-org/accordion";
import React from "react";

export default function BlogPage() {
	 const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
		<section>
			<Accordion>
				<AccordionItem key="1" title="Blog Post 1">
					{defaultContent}
				</AccordionItem>
			</Accordion>
		</section>

    );
}
