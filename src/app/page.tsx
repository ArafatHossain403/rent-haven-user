import IconNavBar from "@/components/allbars/IconNavBar.componet";
import Navbar from "@/components/allbars/Navbar.component";
import TopBar from "@/components/allbars/TopBar.component";
import ListCard from "@/components/cards/ListCard.component";
import MainFooter from "@/components/footer/MainFooter.component";

export default function Home() {
  return (
    <>
      <TopBar />
      <IconNavBar/>
      <ListCard/>
    </>
  );
}
