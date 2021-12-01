import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@component/buttons/Button";
import TextField from "@component/text-field/TextField";
import Radio from "@component/radio/Radio";
import TextArea from "@component/text-area/TextArea";
import Text from "@component/typography/Text";
import Progress from "@component/progress/Progress";
import Modal from "@component/modal/Modal";
import Tooltip from "@component/tooltip/Tooltip";
import Dropdown from "@component/dropdown/Dropdown";
import Switch from "@component/switch/Switch";
import Table from "@component/table/Table";
import ListGroup from "@component/list-group/ListGroup";
import Spinner from "@component/spinners/Spinner";
import TabComponent from "@component/tabs/Tab";
import SimpleForm from "@component/forms/SimpleForm";
import Chips from "@component/chips/Chips";
import Badges from "@component/badge/Badges";
import CheckBoxes from "@component/checkbox/CheckBoxes";
import Accordion from "@component/accordion/Accordion";
import Ratings from "@component/ratings/Ratings";
import Alerts from "@component/alerts/Alerts";
import ListboxComponent from "@component/listbox/Listbox";
import PopperComponent from "@component/popover/PopperComponent";
import Grid from "@component/grid/Grid";
import MultiRangeSlider from "@component/range-slider/MultiRangeSlider";
import BreadCump from "@component/breadcump/BreadCump";
import Card1 from "@component/cards/Card1";
import Card2 from "@component/cards/Card2";
import Navbar from "@component/navbar/Navbar";
import Sidebar from "@component/sidebar/Sidebar";
import Navbar2 from "@component/navbar/Navbar2";
import PlaceHolder from "@component/placeholder/PlaceHolder";

export default function Home() {
  return (
    <div className="px-8 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="block">
        <h1 className="mb-4 text-center font-bold text-4xl md:text-5xl lg:text-6xl py-8">
          <span className="text-blue-400">Utilility</span> Components
        </h1>

        <Navbar />
        <Navbar2 />

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">BreadCump</h2>
          <BreadCump />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Buttons</h2>
          <Button />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Chips</h2>
          <Chips />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Badges</h2>
          <Badges />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Typography</h2>
          <Text />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Grid</h2>
          <Grid />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-0 md:gap-8">
          <div className="py-8">
            <h2 className="text-lg font-medium mb-4">Text Input</h2>
            <TextField />
          </div>

          <div className="py-8">
            <h2 className="text-lg font-medium mb-4">Form</h2>
            <SimpleForm />
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Textarea</h2>
          <TextArea />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Radio Buttons</h2>
          <Radio />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Checkboxes</h2>
          <CheckBoxes />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Switches</h2>
          <Switch />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Range Slider</h2>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Spinner</h2>
          <Spinner />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Ratings</h2>
          <Ratings />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Progress</h2>
          <Progress />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">List Group</h2>
          <ListGroup />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Alerts</h2>
          <Alerts />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Cards</h2>
          <Card1 />
          <Card2 />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Tooltip</h2>
          <Tooltip />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Popover</h2>
          <PopperComponent />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Modal</h2>
          <Modal />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Dropdown</h2>
          <Dropdown />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Listbox</h2>
          <ListboxComponent />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Table</h2>
          <Table />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Tabs</h2>
          <TabComponent />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Accordion</h2>
          <Accordion />
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium mb-4">Placeholder</h2>
          <PlaceHolder />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
