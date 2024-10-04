import { Card, CardBody, Image } from "@nextui-org/react";

export default function AboutPage() {
    return (
        <section className="flex flex-col items-center">
            <Card className="w-full max-w-7xl p-5">
                <CardBody>
                    <p>
                        Hello! I'm Corey Gallagher, an endlessly inquisitive software engineer with a passion for peeling back the layers of how things work. My curiosity sparked at age five when I dismantled a microwave just to peek inside. That curiosity extends beyond gadgets; from a DIY backyard patio as a kid to developing sophisticated financial management software.
                    </p>
                    <p>
                        At Marquette University, I honed my skills with dual majors in Computer Science and Computational Mathematics. My education was carefully crafted to deepen my technical expertise and to innovate solutions for real-world issues.
                    </p>
                    <p>
                        Now, I am dedicated to building scalable solutions that significantly impact daily life. My drive is to turn innovative ideas into realities that not only fulfill needs but also make a meaningful difference.
                    </p>
                    <p>
                        I have a keen interest in personal finance technology. I aim to transform this sector, making it easier and more intuitive for people to manage their finances. My ultimate goal is to work at a company that leads with innovation, solving complex challenges and improving financial wellness.
                    </p>
                    <p>
                        I am committed to efficiency and automation, enhancing processes wherever I go. I am excited for what the future holds and eager to contribute to the evolution of technology.
                    </p>
                </CardBody>
            </Card>

            <div className="flex w-full max-w-7xl justify-around mt-5 space-x-4">
                <Card className="flex-1">
                    <CardBody>
                        <Image src="./pictures/verbier.jpg" alt="Verbier" width={500} height={300} />
                    </CardBody>
                </Card>
                <Card className="flex-1">
                    <CardBody>
                        <Image src="./pictures/positano.jpg" alt="Positano" width={500} height={300} />
                    </CardBody>
                </Card>
                <Card className="flex-1">
                    <CardBody>
                        <Image src="./pictures/grindlewald.jpg" alt="Grindelwald" width={500} height={300} />
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}
