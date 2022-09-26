import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Heading, SubHeading, SmallButton } from "../index";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useUserContext } from "../../context/state";
import { showToolTip } from "../utils";
import useURL from "../../hooks/useUrl";

export const SharableView = ({ userId }) => {
  const url = useURL();
  const { userName } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (url.includes("#crushes")) {
      const element = document.getElementById("friendcrush");
      router.push(`/#friendcrushes`);
      element && element.scrollIntoView({ behavior: "smooth" });
    }
  }, [url]);

  return (
    <>
      <div className="mt-3">
        <Heading label="Love Calculator Prank" />
      </div>
      <div className="mt-2 text-gray-600">
        <SubHeading label="Share your link with friends on Facebook and Whatsapp to know their crush names " />
      </div>
      <div className="mt-3">
        <CopyToClipboard text={`${url.split("#")[0]}${userId}`}>
          <div className="border bg-white py-2 text-md md:text-lg rounded-xlg">
            {`${url.split("#")[0]}${userId}`}
          </div>
        </CopyToClipboard>
      </div>
      <div className="mt-3 mx-auto w-64" data-tooltip="Copied">
        <CopyToClipboard
          text={`${url.split("#")[0]}${userId}`}
          onCopy={() => showToolTip()}
        >
          <SmallButton label="Copy this link" />
        </CopyToClipboard>
      </div>
      <div className="my-3 mx-auto w-full md:w-2/3">
        <SmallButton
          label="Check who your friends love"
          onClick={() => {
            router.push(`/#crushes`);
            router.reload(window.location.pathname);
          }}
        />
      </div>
      <div className="my-1 flex">
        <SharableIcon
          color="#1cb06d"
          icon={<WhatsAppIcon />}
          href={`https://api.whatsapp.com/send?text=❤ *Amazing Astrology Love Calculator* ❤ %0D%0ACalculate Love Percentage Between You and Your Partner 😻😻%0D%0A‼👇👇👇👇👇👇‼ %0D%0A ${
            url.split("#")[0]
          }${userId}`}
        />
        <SharableIcon
          color="linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
          icon="Add to Instagram Bio"
          href="https://www.instagram.com/accounts/edit/"
        />
      </div>
      <SharableIcons url={`${url.split("#")[0]}${userId}`} name={userName} />
    </>
  );
};

class SharableIcons extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      var addthisScript = document.createElement("script");
      addthisScript.setAttribute(
        "src",
        "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55bb64a351c52412"
      );
      if (document.body) document.body.appendChild(addthisScript);
      const interval = setInterval(() => {
        var addthis_config = window.addthis_config || {};
        if (Object.keys(addthis_config).length) {
          clearInterval(interval);
        }
        addthis_config.data_track_addressbar = false;
        addthis_config.data_track_clickback = false;
      }, 500);
    });
  }

  render() {
    const { url } = this.props;

    const title = `❤ Amazing Astrology Love Calculator ❤\nCalculate Love Percentage Between You & Your Partner 😻😻\n‼👇👇👇👇👇👇‼\n 👉`;
    return (
      <div
        className="addthis_inline_share_toolbox my-3"
        data-url={url}
        data-title={title}
        data-description={title}
      />
    );
  }
}

const SharableIcon = ({ icon, color, href }) => (
  <a
    className="flex-1 my-2 mx-1 md:mx-2 md:px-1 py-2 border rounded-lg text-sm md:text-base font-semibold text-white"
    style={{ background: color }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const WhatsAppIcon = () => (
  <div className="flex items-center justify-center ">
    <svg
      className="mr-1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="18"
      height="18"
      viewBox="0 0 90 90"
    >
      <g>
        <path
          id="WhatsApp"
          d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"
          fill="#eeeeee"
        />
      </g>
    </svg>
    <span className="text-sm md:text-base">Whatsapp Status</span>
  </div>
);
