import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail} from "react-icons/ci";
import Link from "next/link";
import { MapProvider } from "../providers/map-provider";
import { MapComponent } from "@/components/map";
import Image from "next/image";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 text-custom-blue">
				<div className="p-5">
					<ul>
						<p className=" font-bold text-4xl pb-4">CONTACTO</p>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
							<Link href="mailto:contacto@asesoriasvaldivia.cl?Subject=Consulta%20General%20Asesorías%20Valdivia">contacto@asesoriasvaldivia.cl</Link>
						</li>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
							<Link href="/cotiza">Cotiza con nosotros</Link>
						</li>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
						<Link href="/contactanos">Consultas Generales</Link>
						</li>
						<li className="py-4">
							<MapProvider>
								<MapComponent/>
							</MapProvider>
						</li>
						<li className="py-4 text-l text-custom-blue">
							Arturo Prat #482,<br></br>Oficina 305.<br></br>Antofagasta, Chile.
						</li>

					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-4xl pb-4">INFORMACIÓN</p>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
						<Link href="/nosotros">Quiénes Somos</Link>
						</li>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
							<Link href="/documents/misionvision">Misión y Visión</Link>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="font-bold text-4xl pb-4">POLÍTICAS</p>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
						<Link href="/documents/privacidad">Privacidad</Link>
						</li>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
							<Link href="/documents/terminosdeuso">Aviso legal y Términos de Uso</Link>
						</li>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
							<Link href="/contactanos">Sugerencias y Felicitaciones</Link>
						</li>
					</ul>
				</div>
                <div className="p-5 font-grotesk ">
					<ul>
						<p className="font-bold text-4xl pb-4">
							<span>RRSS</span>
						</p>
						<div className="flex gap-6 pb-5">
							<Link href="http://www.instagram.com/asesoriasvaldivia"><FaInstagram className="text-3xl cursor-pointer hover:text-custom-green" /></Link>
							<Link href="https://www.linkedin.com/in/ricardo-valdivia-salis-5bb4b0247/"><FaLinkedin className="text-3xl cursor-pointer hover:text-blue-600" /></Link>
							<Link href="mailto:contacto@asesoriasvaldivia.cl?Subject=Consulta%20Servicios%20Asesorías%20Valdivia"><CiMail className="text-3xl cursor-pointer hover:text-red-600" /></Link>
						</div>
					</ul>
					
					<Image
					src="/assets/isotipodos.png"
					width={200}
					height={200}
					alt="isotipo Asesorías Valdivia"
					
					/>
					
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center py-4 bg-gray-50">
				<h4 className=" text-custom-blue font-semibold">
					© 2024 All rights reserved | Developer by a unicorn		
				</h4>
			</div>
		</>
	);
}

export default Footer;