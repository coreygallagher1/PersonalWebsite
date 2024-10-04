import { Card, CardBody, CardFooter, Textarea, Button,  } from "@nextui-org/react";

export default function ResumePage() {

    return (

		<Card>
			<CardBody>
				<iframe 
					src="./resume.pdf" 
					width="100%"
					height="650px"
					style={{ borderRadius: '8px' }}
				></iframe>
			</CardBody>
		</Card>
			
    );
}
