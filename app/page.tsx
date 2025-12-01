"use client";

import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import { Image, Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import headshot from "@/public/pictures/headshot.JPG";
import verbier from "@/public/pictures/verbier.jpg";
import positano from "@/public/pictures/positano.jpg";
import grindlewald from "@/public/pictures/grindlewald.jpg";
import MU from "@/public/pictures/MU.jpg";
import DS from "@/public/pictures/DS.png";
import FT from "@/public/pictures/FlexTrade.jpg";
import LS from "@/public/pictures/leidos.jpg";
import untether from "@/public/pictures/untether.webp";
import groupify from "@/public/pictures/GroupifyLogo.webp";
import arbEngine from "@/public/pictures/ArbLogo.webp";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useState, useEffect } from "react";

function TypingAnimation() {
	const [displayedText, setDisplayedText] = useState("");
	const fullText = "Hello, I am Corey Gallagher";
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		let currentIndex = 0;
		const typingInterval = setInterval(() => {
			if (currentIndex < fullText.length) {
				setDisplayedText(fullText.slice(0, currentIndex + 1));
				currentIndex++;
			} else {
				setShowCursor(false);
				clearInterval(typingInterval);
			}
		}, 100); // Typing speed

		return () => clearInterval(typingInterval);
	}, []);

	// Split the text to apply different styling
	const beforeName = "Hello, I am ";
	const isTypingName = displayedText.length > beforeName.length;
	const displayedBeforeName = displayedText.slice(0, beforeName.length);
	const displayedName = displayedText.slice(beforeName.length);

	return (
		<h1 className="text-center whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
			<span className="text-white">
				{displayedBeforeName}
			</span>
			{isTypingName && (
				<span className="bg-clip-text text-transparent bg-gradient-to-b from-[#5EA2EF] to-[#0072F5]">
					{displayedName}
				</span>
			)}
			{showCursor && (
				<span className="inline-block w-[2px] h-[1em] bg-white ml-1 align-middle" aria-hidden="true"></span>
			)}
		</h1>
	);
}

export default function Home() {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent pointer-events-none"></div>
				<div className="inline-block max-w-2xl text-center justify-center px-4 relative z-10">
					<div className="mb-4 sm:mb-6 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex items-center justify-center">
						<TypingAnimation />
					</div>
					<div className="flex justify-center w-full my-6 sm:my-8 md:my-10"> 
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
							<Image
								width={300}
								height={300}
								alt="Corey Gallagher's Headshot"
								src={headshot.src}
								radius="full"
								shadow="lg"
								className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] object-cover relative z-10 border-4 border-white shadow-2xl"
							/>
						</div>
					</div>
					<div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
						<h2 className={`${subtitle({ class: "" })} text-xl sm:text-2xl md:text-3xl text-white font-medium`}>
							a curious individual and passionate software engineer
						</h2>
						<h2 className={`${subtitle({ class: "" })} text-lg sm:text-xl md:text-2xl text-white`}>
							📍 New York City
						</h2>
					</div>
					<div className="flex justify-center w-full gap-5 sm:gap-6 md:gap-8">
						<Link isExternal href="https://www.instagram.com/coreygallagher1/" className="transition-all hover:scale-110 hover:opacity-80">
							<Image src="/pictures/instagram.png" alt="Instagram" width={50} height={50} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg" />
						</Link>
						<Link isExternal href="https://github.com/coreygallagher1?tab=repositories" className="transition-all hover:scale-110 hover:opacity-80">
							<Image src="/pictures/github.png" alt="GitHub" width={50} height={50} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg" />
						</Link>
						<Link isExternal href="https://www.linkedin.com/in/coreygallagher/" className="transition-all hover:scale-110 hover:opacity-80">
							<Image src="/pictures/linkedin.png" alt="LinkedIn" width={50} height={50} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg" />
						</Link>
						<Link isExternal href="/resume.pdf" className="transition-all hover:scale-110 hover:opacity-80">
							<Image src="/pictures/resume.png" alt="Resume" width={50} height={50} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg" />
						</Link>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white/40 backdrop-blur-sm">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className={`${title({ size: "lg" })} mb-4`}>About Me</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
					</div>
					<Card className="w-full shadow-xl border-0 mb-8">
						<CardBody className="p-8 sm:p-10 md:p-12">
							<div className="prose prose-lg max-w-none text-gray-700 space-y-6">
								<p className="text-lg leading-relaxed">
									Hello! I&apos;m Corey Gallagher, an endlessly inquisitive software engineer with a passion for peeling back the layers of how things work. My curiosity sparked at age five when I dismantled a microwave just to peek inside. That curiosity extends beyond gadgets; from a DIY backyard patio as a kid to developing sophisticated financial management software.
								</p>
								<p className="text-lg leading-relaxed">
									At Marquette University, I honed my skills with dual majors in Computer Science and Computational Mathematics. My education was carefully crafted to deepen my technical expertise and to innovate solutions for real-world issues.
								</p>
								<p className="text-lg leading-relaxed">
									Now, I am dedicated to building scalable solutions that significantly impact daily life. My drive is to turn innovative ideas into realities that not only fulfill needs but also make a meaningful difference.
								</p>
								<p className="text-lg leading-relaxed">
									I have a keen interest in personal finance technology. I aim to transform this sector, making it easier and more intuitive for people to manage their finances. My ultimate goal is to work at a company that leads with innovation, solving complex challenges and improving financial wellness.
								</p>
								<p className="text-lg leading-relaxed">
									I am committed to efficiency and automation, enhancing processes wherever I go. I am excited for what the future holds and eager to contribute to the evolution of technology.
								</p>
							</div>
						</CardBody>
					</Card>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
						<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardBody className="p-0">
								<Image src={verbier.src} alt="Verbier" width={500} height={300} className="w-full h-[250px] sm:h-[300px] object-cover" />
							</CardBody>
						</Card>
						<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardBody className="p-0">
								<Image src={positano.src} alt="Positano" width={500} height={300} className="w-full h-[250px] sm:h-[300px] object-cover" />
							</CardBody>
						</Card>
						<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardBody className="p-0">
								<Image src={grindlewald.src} alt="Grindelwald" width={500} height={300} className="w-full h-[250px] sm:h-[300px] object-cover" />
							</CardBody>
						</Card>
					</div>
				</div>
			</section>

			{/* Work Experience Section */}
			<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white/40 backdrop-blur-sm">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className={`${title({ size: "lg" })} mb-4`}>Work Experience</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
					</div>
					
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* FlexTrade */}
						<div className="flex flex-col">
							<Link href="https://www.flextrade.com" isExternal className="cursor-pointer">
								<Card className="overflow-hidden shadow-lg mb-4">
									<CardBody className="p-0">
										<Image src={FT.src} alt="FlexTrade Logo" width={500} height={300} className="w-full h-[250px] sm:h-[300px] object-cover" />
									</CardBody>
								</Card>
							</Link>
							<Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm flex-1">
								<CardBody className="p-5 sm:p-6 flex flex-col h-full text-center">
									<h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 leading-snug">FlexTrade Systems</h3>
									<p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
										Client Support, Development, DevOps, Monitoring and Analysis for Order and Portfolio Management Systems.
									</p>
								</CardBody>
							</Card>
						</div>

						{/* Marquette University */}
						<div className="flex flex-col">
							<Link href="https://www.marquette.edu/data-science/" isExternal className="cursor-pointer">
								<Card className="overflow-hidden shadow-lg mb-4">
									<CardBody className="p-0">
										<Image src={MU.src} alt="MU DS Logo" width={500} height={300} className="w-full h-[250px] sm:h-[300px] object-cover" />
									</CardBody>
								</Card>
							</Link>
							<Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm flex-1">
								<CardBody className="p-5 sm:p-6 flex flex-col h-full text-center">
									<h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 leading-snug">Marquette University Data Science Laboratory</h3>
									<p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
										Food Insecurity Data Modeling and Data Intensive Applications Research.
									</p>
								</CardBody>
							</Card>
						</div>

						{/* Direct Supply */}
						<div className="flex flex-col">
							<Link href="https://www.directsupply.com" isExternal className="cursor-pointer">
								<Card className="overflow-hidden shadow-lg mb-4">
									<CardBody className="p-0">
										<Image src={DS.src} alt="Direct Supply Logo" width={500} height={300} className="w-full h-[250px] sm:h-[300px] object-cover" />
									</CardBody>
								</Card>
							</Link>
							<Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm flex-1">
								<CardBody className="p-5 sm:p-6 flex flex-col h-full text-center">
									<h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 leading-snug">Direct Supply</h3>
									<p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
										API Development and Data Systems ETL for Medical Supplies E-Commerce.
									</p>
								</CardBody>
							</Card>
						</div>

						{/* Leidos */}
						<div className="flex flex-col">
							<Link href="https://www.leidos.com" isExternal className="cursor-pointer">
								<Card className="overflow-hidden shadow-lg mb-4">
									<CardBody className="p-0">
										<Image src={LS.src} alt="Leidos Logo" width={500} height={300} className="w-full h-[250px] sm:h-[300px] object-cover" />
									</CardBody>
								</Card>
							</Link>
							<Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm flex-1">
								<CardBody className="p-5 sm:p-6 flex flex-col h-full text-center">
									<h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 leading-snug">Leidos</h3>
									<p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
										Air Traffic Control Systems Development and Testing.
									</p>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white/40 backdrop-blur-sm">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className={`${title({ size: "lg" })} mb-4`}>Projects</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
					</div>
					
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Untether */}
						<div className="flex flex-col">
							<Link href="https://github.com/coreygallagher1/Untether" isExternal className="cursor-pointer block mb-4">
								<div className="h-[250px] sm:h-[300px] flex items-center justify-center">
									<div className="w-full flex justify-center">
										<Image 
											src={untether.src} 
											alt="untetherLogo" 
											width={300} 
											height={300} 
											className="max-w-full max-h-full object-contain"
										/>
									</div>
								</div>
							</Link>
							<Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm flex-1">
								<CardBody className="p-5 sm:p-6 flex flex-col h-full">
									<h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 leading-snug text-center">Untether</h3>
									<p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow mb-4 text-center">
										Untether is a personal finance management app built with React Next.js and Plaid. It allows users to connect their bank accounts, track their expenses, and automate debt repayment through round-up payments. The app also features a learning section that provides educational resources and tools to help users improve their financial literacy.
									</p>
									<div className="mt-auto flex justify-center">
										<Link href="https://github.com/coreygallagher1/Untether" isExternal>
											<Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
												View Repository
											</Button>
										</Link>
									</div>
								</CardBody>
							</Card>
						</div>

						{/* Currency Arbitrage Analytics Engine */}
						<div className="flex flex-col">
							<Link href="https://github.com/coreygallagher1/CurrencyArbitrageAnalyticsEngine" isExternal className="cursor-pointer block mb-4">
								<div className="h-[250px] sm:h-[300px] flex items-center justify-center">
									<div className="w-full flex justify-center">
										<Image 
											src={arbEngine.src} 
											alt="arbLogo" 
											width={300} 
											height={300} 
											className="max-w-full max-h-full object-contain"
										/>
									</div>
								</div>
							</Link>
							<Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm flex-1">
								<CardBody className="p-5 sm:p-6 flex flex-col h-full">
									<h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 leading-snug text-center">Currency Arbitrage Analytics Engine</h3>
									<p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow mb-4 text-center">
										Comprehensive system designed to identify and analyze arbitrage opportunities across various currency markets in real-time. It leverages a microservices architecture to efficiently process live data, detect potential arbitrage opportunities, and calculate the associated profit margins after accounting for transaction costs.
									</p>
									<div className="mt-auto flex justify-center">
										<Link href="https://github.com/coreygallagher1/CurrencyArbitrageAnalyticsEngine" isExternal>
											<Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
												View Repository
											</Button>
										</Link>
									</div>
								</CardBody>
							</Card>
						</div>

						{/* Groupify */}
						<div className="flex flex-col">
							<Link href="https://github.com/coreygallagher1/Groupify" isExternal className="cursor-pointer block mb-4">
								<div className="h-[250px] sm:h-[300px] flex items-center justify-center">
									<div className="w-full flex justify-center">
										<Image 
											src={groupify.src} 
											alt="GroupifyLogo" 
											width={300} 
											height={300} 
											className="max-w-full max-h-full object-contain"
										/>
									</div>
								</div>
							</Link>
							<Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm flex-1">
								<CardBody className="p-5 sm:p-6 flex flex-col h-full">
									<h3 className="text-base sm:text-lg font-bold text-blue-600 mb-3 leading-snug text-center">Groupify</h3>
									<p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow mb-4 text-center">
										Groupify is an iOS app built with Swift that simplifies classroom management by allowing teachers to import student data, track attendance, and organize groups based on various criteria. It features efficient attendance recording, customizable student call options, and a versatile number generator for classroom activities. Teachers can also save and export groups for future use.
									</p>
									<div className="mt-auto flex justify-center">
										<Link href="https://github.com/coreygallagher1/Groupify" isExternal>
											<Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
												View Repository
											</Button>
										</Link>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Blog Section */}
			<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white/40 backdrop-blur-sm">
				<div className="container mx-auto max-w-4xl">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className={`${title({ size: "lg" })} mb-4 text-4xl sm:text-5xl md:text-6xl`}>Blog</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
					</div>
					<Card className="shadow-xl border-0">
						<CardBody className="p-8">
							<Accordion>
								<AccordionItem 
									key="1" 
									title={
										<span>
											<span className="text-gray-500 font-medium">Recipe:</span>{" "}
											<span className="font-semibold">Bone Broth Dijon Chicken Thighs</span>
										</span>
									} 
									className="text-lg"
								>
									<div className="text-gray-700 leading-relaxed pt-4">
										<div className="mb-6">
											<h4 className="font-semibold text-base mb-3">Chicken:</h4>
											<ul className="list-disc list-inside space-y-1 ml-2">
												<li>6 bone-in, skin-on chicken thighs</li>
												<li>1 ½ teaspoons kosher salt</li>
												<li>1 teaspoon black pepper</li>
												<li>1 teaspoon garlic powder</li>
												<li>1 teaspoon onion powder</li>
												<li>1 teaspoon paprika (optional)</li>
											</ul>
										</div>

										<div className="mb-6">
											<h4 className="font-semibold text-base mb-3">Sauce:</h4>
											<ul className="list-disc list-inside space-y-1 ml-2">
												<li>1 cup chicken bone broth (use 1.5 cups if you want extra sauce)</li>
												<li>2 tablespoons Dijon mustard</li>
												<li>1 tablespoon whole grain mustard (optional but good)</li>
												<li>3–4 garlic cloves, minced</li>
												<li>1 small onion or 2 shallots, sliced</li>
												<li>1 tablespoon honey or maple syrup</li>
												<li>1 tablespoon lemon juice or a splash of white wine</li>
												<li>1–2 tablespoons butter</li>
												<li>Fresh thyme or rosemary (optional)</li>
											</ul>
										</div>

										<div>
											<h4 className="font-semibold text-base mb-3">Instructions:</h4>
											<ol className="list-decimal list-inside space-y-3 ml-2">
												<li><strong>Season the chicken.</strong> Pat the thighs dry. Season with salt, pepper, garlic powder, onion powder, and paprika.</li>
												<li><strong>Sear the chicken.</strong> Heat a skillet over medium-high with a little oil. Place the thighs skin-side down and leave them alone until the skin is deeply browned and crisp, about 7–9 minutes. Flip and cook another 3–4 minutes. Remove from the pan.</li>
												<li><strong>Build the sauce.</strong> In the same pan, add a small amount of butter and the onions. Cook until softened. Add the garlic and cook for about 30 seconds. Stir in the Dijon, whole grain mustard, honey, and lemon juice or wine.</li>
												<li><strong>Add the bone broth.</strong> Pour in the broth and scrape up anything stuck to the pan. Let it simmer for a minute.</li>
												<li><strong>Simmer the chicken.</strong> Add the thighs back in, skin-side up. Add thyme or rosemary if you&apos;re using it. Cover and simmer for 15 minutes. Uncover and cook another 10–15 minutes, until the sauce has reduced and thickened.</li>
												<li><strong>Finish the sauce.</strong> Turn off the heat and stir in the butter to give the sauce a smooth finish.</li>
											</ol>
										</div>
									</div>
								</AccordionItem>
							</Accordion>
						</CardBody>
					</Card>
				</div>
			</section>

			{/* Resume Section */}
			<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white/40 backdrop-blur-sm">
				<div className="container mx-auto max-w-5xl">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className={`${title({ size: "lg" })} mb-4`}>Resume</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
					</div>
					<Card className="shadow-2xl border-0 overflow-hidden">
						<CardBody className="p-0">
							<iframe 
								src="/resume.pdf" 
								width="100%"
								height="800px"
								className="w-full min-h-[800px] border-0"
								title="Resume"
							></iframe>
						</CardBody>
					</Card>
				</div>
			</section>
		</div>
	);
}
