import Head from "next/head";

import Layout from "../../components/Layout";
import HeaderSection from "../../components/statics/HeaderSection";
import DetailCompanyForm from "../../components/forms/DetailCompanyForm";
import LocationCards from "../../components/cards/LocationCard";
import ActivityCard from "../../components/cards/ActivityCard";
import RelationCard from "../../components/cards/RelationCard";
import BankCard from "../../components/cards/BankCard";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Pre-Test MIG - Dashboard Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-[#e2efe1] h-screen desktop:w-[1500px] tab:w-[780px] w-[500px]overflow-x-hidden text-gray-900 mr-10 ml-6">
        <div>
          <HeaderSection />
        </div>

        <main className="mt-6 h-fit px-10">
          <div className="flex gap-6 mt-2 mb-10 tab:flex-col desktop:flex-row flex-col">
            <div className=" desktop:w-[450px] border border-transparent bg-white rounded-[5px]">
              <DetailCompanyForm />
            </div>

            <div className=" h-fit desktop:h-screen desktop:w-[1000px] ">
              <div className="h-[150px] border border-transparent bg-white rounded-[5px]">
                <LocationCards />
              </div>

              <div className="flex gap-8  h-screen mt-5 ">
                <div className="h-fit desktop:h-screen  w-[500px]">
                  <div className="grid grid-rows-2 gap-6 ">
                    <div className="h-[380px] bg-white rounded-[5px]">
                      <BankCard />
                    </div>
                    <div className=" desktop:h-[380px] h-fit  rounded-[5px] bg-white">
                      <RelationCard />
                    </div>
                  </div>
                </div>
                <div className="py-5 px-5 desktop:h-screen h-fit border border-transparent desktop:w-[500px]  tab:w-[350px] bg-white rounded-[5px]">
                  <ActivityCard />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
