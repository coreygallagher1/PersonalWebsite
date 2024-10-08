import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/react";
import headshot from "@/public/pictures/headshot.jpg"


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>I am&nbsp;</h1>
				<h1 className={title({ color: "blue" })}>Corey Gallagher&nbsp;</h1>
				<div className="flex justify-center w-full mt-10"> 
					<Image
						width={300}
						alt="Corey Gallagher's Headshot"
						src={headshot.src}
						radius="full"
						shadow="lg"
					/>
       			</div>
				<h2 className={subtitle({ class: "mt-10" })}>
					a curious individual and passionate software engineer
				</h2>
				<h2 className={subtitle({ class: "mt-4" })}>
					New York City
				</h2>
				<div className="flex justify-center w-full mt-20 gap-6">
                <Link isExternal href="https://www.instagram.com/coreygallagher1/">
                    <Image src="/pictures/instagram.png" alt="Instagram" width={50} height={50} />
                </Link>
                <Link isExternal href="https://github.com/coreygallagher1?tab=repositories">
                    <Image src="/pictures/github.png" alt="GitHub" width={50} height={50} />
                </Link>
                <Link isExternal href="ttps://www.linkedin.com/in/coreygallagher/">
                    <Image src="/pictures/linkedin.png" alt="LinkedIn" width={50} height={50} />
                </Link>
                <Link isExternal href="/resume">
                    <Image src="/pictures/resume.png" alt="Resume" width={50} height={50} />
                </Link>
            	</div>
			</div>
		</section>
	);
}
