import { Card, CardBody, CardFooter, Image, Button,Link } from "@nextui-org/react";
import untether from "@/public/pictures/untether.webp"
import groupify from "@/public/pictures/GroupifyLogo.webp"
import arbEngine from "@/public/pictures/ArbLogo.webp"
import { title, subtitle } from "@/components/primitives";

export default function ProjectsPage() {
    return (
        <section>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-content-center place-items-center">
                <Card>
                    <CardBody className="">
                        <h2 className={`${title({ color: "blue" })} text-center mb-4`}>Currency Arbitrage Analytics Engine&nbsp;</h2>
                        <p className="text-center">Comprehensive system designed to identify and analyze arbitrage opportunities across various currency markets in real-time. It leverages a microservices architecture to efficiently process live data, detect potential arbitrage opportunities, and calculate the associated profit margins after accounting for transaction costs.</p>
                    </CardBody>
                </Card>
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                    >
                    <Image
                        alt="arbLogo"
                        className="object-cover"
                        height={500}
                        src={arbEngine.src}
                        width={400}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Explore This Project:</p>
                        <Link href="https://github.com/coreygallagher1/CurrencyArbitrageAnalyticsEngine">
                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                View Github Repository
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </section>
            <hr></hr>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-content-center place-items-center">
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                    >
                    <Image
                        alt="untetherLogo"
                        className="object-cover"
                        height={500}
                        src={untether.src}
                        width={400}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Explore This Project:</p>
						<Link href="https://github.com/coreygallagher1/Untether">
							<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
							View Github Repository
							</Button>
						</Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="">
                        <h2 className={`${title({ color: "blue" })} text-center mb-4`}>Untether&nbsp;</h2>
                        <p className="text-center">Untether is a personal finance management app built with React Next.js and Plaid. It allows users to connect their bank accounts, track their expenses, and automate debt repayment through round-up payments. The app also features a learning section that provides educational resources and tools to help users improve their financial literacy.</p>
                    </CardBody>
                </Card>
                
            </section>
            <hr></hr>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-content-center place-items-center">
                <Card>
                    <CardBody className="">
                        <h2 className={`${title({ color: "blue" })} text-center mb-4`}>Groupify&nbsp;</h2>
                        <p className="text-center">Groupify is an iOS app built with Swift that simplifies classroom management by allowing teachers to import student data, track attendance, and organize groups based on various criteria. It features efficient attendance recording, customizable student call options, and a versatile number generator for classroom activities. Teachers can also save and export groups for future use.</p>
                    </CardBody>
                </Card>
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                    >
                    <Image
                        alt="GroupifyLogo"
                        className="object-cover"
                        height={500}
                        src={groupify.src}
                        width={400}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Explore This Project:</p>
							<Link href="https://github.com/coreygallagher1/Groupify">
							<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
							View Github Repository
							</Button>
						</Link>
                    </CardFooter>
                </Card>
            </section>
        </section>
    );
}
