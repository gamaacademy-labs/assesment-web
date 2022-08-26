import {
	Button,
	MaterialIcon,
	Typography,
} from "@gama-academy/smash-web";
import Cookies from "js-cookie";
import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export default function AllAssements() {
	const userName = Cookies.get("user") as string;

	return (
		<Container>
			<Header title={userName} />
			<Content>
				<Typography type="title">Avaliações</Typography>
				<div className="avaliation">
					<p>Primeira avaliação</p>
					<Button
						color="primary.3"
						onClick={function noRefCheck() {}}
						size="0"
						variant="filled"
					>
            <Typography mr={2}>Realizar avaliação</Typography>
						<MaterialIcon
							name="play_circle_filled"
							shape="none"
							shapeBackground="primary.3"
              color='white'
							type="round"
						/>
					</Button>
				</div>
				<div className="avaliation">
					<p>Segunda avaliação</p>
					<Button
						color="primary.3"
						onClick={function noRefCheck() {}}
						size="0"
						variant="filled"
					>
            <Typography mr={2}>Realizar avaliação</Typography>
						<MaterialIcon
							name="play_circle_filled"
							shape="none"
							shapeBackground="primary.3"
              color='white'
							type="round"
						/>
					</Button>
				</div>
			</Content>
		</Container>
	);
}
