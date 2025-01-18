
import ListingDetailsComopent from "@/components/listing/ListingDetails.comopent";

const ListingDetails = async ({ params }: { params: { id: string } }) => {

  return (
    <>
      <ListingDetailsComopent id={params?.id} />
    </>
  );
};

export default ListingDetails;
