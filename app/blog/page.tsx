import {Accordion, AccordionItem} from "@nextui-org/react";
import React from "react";

export default function BlogPage() {
	 const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
		<section>
			<Accordion >
				<AccordionItem id="1"></AccordionItem>
			</Accordion>
		</section>

    );
}
