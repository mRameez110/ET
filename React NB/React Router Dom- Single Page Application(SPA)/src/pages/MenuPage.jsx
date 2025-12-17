import React from "react";
import { Link } from "react-router-dom";

function MenuPage() {
	return (
		<div>
			MenuPage
			<ul>
				<li>
					<Link to="/product/1">P1</Link>
				</li>

				<li>
					<Link to="/product/2">P2</Link>
				</li>

				<a href="https://www.nexusberry.com/">
					<li>Nexus Berry Website </li>
				</a>
			</ul>
		</div>
	);
}

