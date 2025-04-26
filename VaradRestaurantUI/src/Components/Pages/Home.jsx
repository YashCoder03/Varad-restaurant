import bgVideo from "../../assets/Food_Video_1.mp4";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"></div>
        {/* Foreground content */}
        <div className="flex flex-col items-center justify-center gap-5 h-full text-white z-10 relative">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Delivering Food Delivering Happiness
          </h1>
          <h1 className="text-xl mt-7 md:text-4xl mt-5 text-center">Get Flat 30% off on All Food items</h1>
          <button className=" bg-[#302c2c99] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  cursor-pointer p-2 rounded-md">Checkout All trending Items</button>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et
        debitis aut a repellat culpa perferendis, placeat eos quis dicta
        aliquam! Natus, repudiandae reprehenderit! Praesentium unde blanditiis
        eius aperiam natus quasi quae, doloremque magni assumenda. Beatae
        temporibus vitae animi doloribus, laborum incidunt pariatur illum
        dolores voluptatem blanditiis reiciendis saepe impedit similique dolorum
        veritatis ullam fugiat quo rem libero nemo nam sapiente ipsam vero. Iste
        a veniam at aliquid saepe unde, tempora debitis! Soluta recusandae
        consequuntur voluptatem suscipit iusto. Sapiente nisi debitis eveniet
        expedita quae eum nemo, mollitia molestiae perferendis dicta? Dolorum
        dicta ipsum, esse cupiditate reiciendis quas impedit, optio consectetur
        natus ut aperiam quibusdam vel at expedita ex. Fugit quae, itaque illo
        magnam odit corrupti dolores voluptas animi tempora? Ut impedit mollitia
        nam neque quidem quam culpa eius tenetur aut dolor dicta illo aperiam
        ipsum officia nihil debitis modi, veniam libero perferendis facere
        repellendus et, dolores fuga similique. Voluptate esse sint magni aut,
        minus dolor vero odit suscipit sapiente ex blanditiis mollitia
        recusandae expedita quaerat, culpa explicabo necessitatibus dolores
        possimus cum animi, inventore facere obcaecati provident repellendus.
        Dolorem magni nam aut sint ea ex enim qui nostrum veritatis. Error
        tenetur possimus iste dolore cum, ducimus recusandae itaque, expedita
        sit quis inventore ab perspiciatis nemo. Ad, minima ab. Deserunt aut
        natus magni quisquam! Placeat consequuntur tempora repellat nam
        molestiae, est minima quibusdam. Voluptatibus esse harum temporibus,
        ullam voluptate, quibusdam aspernatur perferendis, corporis impedit ipsa
        asperiores distinctio tempore dignissimos. Enim autem accusantium
        dolorum, dignissimos magni dolorem quo ad consequatur eos nemo iste ut
        temporibus laborum distinctio est qui blanditiis eligendi ab
        consequuntur assumenda debitis nam molestias reiciendis quis. Dolorem
        amet velit quia! Sit, magnam id doloremque quidem optio cumque velit
        totam consequatur debitis iure placeat cupiditate eligendi in? Ea
        possimus sit obcaecati voluptatem, laboriosam sequi eum neque,
        necessitatibus fuga error illum praesentium.
      </p>
    </>
  );
};

export default Home;
