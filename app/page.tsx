import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavMenu from "@/components/NavMenu";
import Resources from "@/components/Resources";
import Tagline from "@/components/Tagline";

export default function Home() {
	return (
		<>
			<NavMenu />
			<Hero />
			<Tagline />
			<Resources />
			<Contact />
			<Footer />
		</>
	);
}
