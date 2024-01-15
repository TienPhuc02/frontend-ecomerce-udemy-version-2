import MainHomeLayout from "@/layouts/MainHomePage/app.home";
import { sendRequest } from "@/services/api";

export default async function HomePage() {
  console.log(process.env.BACKEND_URL);
  const currentPage = 1; // Update with your desired page number
  const pageSize = 4;
  const dataProducts = await sendRequest<IBackendRes<IProduct[]>>({
    url: `${process.env.BACKEND_URL}/api/v1/products`,
    method: "GET",
    // queryParams: { currentPage, pageSize },
  });
  console.log("🚀 ~ HomePage ~ products:", await dataProducts);
  return (
    <>
      <MainHomeLayout data={dataProducts?.products ?? []} />
    </>
  );
}
