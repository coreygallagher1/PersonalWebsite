import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import MU from "@/public/pictures/MU.jpg"
import DS from "@/public/pictures/DS.png"
import FT from "@/public/pictures/FlexTrade.jpg"
import LS from "@/public/pictures/leidos.jpg"
import { title, subtitle } from "@/components/primitives";

export default function WorkPage() {
    return (
		<section>
			<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-content-center place-items-center">
				<Card>
					<CardBody className="">
						<h2 className={`${title({ color: "blue" })} text-center mb-4`}>FlexTrade Systems&nbsp;</h2>
						<p>Comprehensive system designed to identify and analyze arbitrage opportunities across various currency markets in real-time. It leverages a microservices architecture to efficiently process live data, detect potential arbitrage opportunities, and calculate the associated profit margins after accounting for transaction costs.</p>
					</CardBody>
				</Card>
				<Card
					isFooterBlurred
					radius="lg"
					className="border-none"
					>
					<Image
						alt="FlexTrade Logo"
						className="object-cover"
						height={500}
						src={FT.src}
						width={400}
					/>
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
						alt="MU DS Logo"
						className="object-cover"
						height={500}
						src={MU.src}
						width={400}
					/>
				</Card>
				<Card>
					<CardBody className="">
					<h2 className={`${title({ color: "blue" })} text-center mb-4`}>Marquette University Data Science Laboratory&nbsp;</h2>
						<p>Untether is a personal finance management app built with React Next.js and Plaid. It allows users to connect their bank accounts, track their expenses, and automate debt repayment through round-up payments. The app also features a learning section that provides educational resources and tools to help users improve their financial literacy.</p>
					</CardBody>
				</Card>
			</section>
			<hr></hr>
			<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-content-center place-items-center">
				<Card>
					<CardBody className="">
					<h2 className={`${title({ color: "blue" })} text-center mb-4`}>Direct Supply&nbsp;</h2>
						<p>Groupify is an iOS application designed to reduce the toil of mundane tasks for teachers so they can focus on what actually matters, teaching. The app can import csv data of students and add them to a class list that the app stores. The app can take attendance very efficiently by just selecting the students that are gone. The app holds and tracks this data to see how often the students are gone. The app can also make groups based on various factors such as grades, attendance records, alphabetical order, or random selection. The app can save and export groups for future use. The app can make it easy to call on students too with different selection modes such as fair, which ensures students each get called on similar amounts, or based on grade if you are trying to make the class speed up or get struggling kids involved. The app also has a multi-functionality number generator for miscellaneous teacher activities.</p>
					</CardBody>
				</Card>
				<Card
					isFooterBlurred
					radius="lg"
					className="border-none"
					>
					<Image
						alt="Woman listing to music"
						className="object-cover"
						height={500}
						src={DS.src}
						width={400}
					/>
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
						alt="Woman listing to music"
						className="object-cover"
						height={500}
						src={LS.src}
						width={400}
					/>
				</Card>
				<Card>
					<CardBody className="">
					<h2 className={title({ color: "blue" })}>Leidos&nbsp;</h2>
						<p>Untether is a personal finance management app built with React Next.js and Plaid. It allows users to connect their bank accounts, track their expenses, and automate debt repayment through round-up payments. The app also features a learning section that provides educational resources and tools to help users improve their financial literacy.</p>
					</CardBody>
				</Card>
			</section>
		</section>
    );
}
