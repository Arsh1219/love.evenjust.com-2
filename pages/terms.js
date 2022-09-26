import React from "react";
import Link from "next/link";
import { Heading } from "../components";
import Layout from "../components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="max-w-2xl py-8 mx-auto text-center md:text-left">
        <Heading label="Terms & Conditions" />
        <div className="mt-2">
          1) We will notify you about Your Friend's Name and His/Her Crush's
          Name Directly.
        </div>
        <div>
          2) You can also Check your Results via <Link href="/">Home Page</Link>
        </div>
        <div>
          3) Send Link to other persons at your own risk. We are not responsible
          for any legal issues.
        </div>
        <div>
          4) We will only store Results Info and your name into our database to
          make site work properly.
        </div>
        <div>We won't share your details with any Third-Party Websites.</div>
        <div>This website use cookies to store info on your device.</div>
        <div>
          We use Third-Party Services like Google Analytics, Google Adsense on
          our Website.
        </div>
        <div>Regards, Team. https://evenjust.com/</div>
      </div>
    </Layout>
  );
};

export default Terms;
