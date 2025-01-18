import IconNavBar from "@/components/allbars/IconNavBar.componet";
import TopBar from "@/components/allbars/TopBar.component";
import AllListingComponent from "@/components/listing/AllListing.component";

export default function Home() {
  return (
    <>
      <TopBar />
      <IconNavBar />
      <AllListingComponent/>
    </>
  );
}
