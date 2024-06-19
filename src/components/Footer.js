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
							contacto@asesoriasvaldivia.cl
						</li>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
							<Link href="/cotiza">Cotiza con nosotros</Link>
						</li>
						<li className=" text-xl pb-2 font-semibold hover:text-custom-green cursor-pointer">
						<Link href="/contactanos">Consultas Generales</Link>
						</li>
						<li className="px-2 py-2">
							<MapProvider>
								<MapComponent/>
							</MapProvider>
						</li>
						<li className="px-2 py-2 text-l text-custom-blue">
							Arturo Pratt #482,<br></br>Oficina 305.<br></br>Antofagasta, Chile.
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
							<Link href="http://www.instagram.com/asesoriasvaldivia"><FaInstagram className="text-2xl cursor-pointer hover:text-custom-green" /></Link>
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<CiMail className="text-2xl cursor-pointer hover:text-red-600" />
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
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2024 All rights reserved | Unicorn ❤ Solutions		
				</h1>
			</div>
		</>
	);
}

export default Footer;