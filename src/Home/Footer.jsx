import PrefooterPhoto1 from "./../assets/PrefooterPhoto/1.png"
import PrefooterPhoto2 from "./../assets/PrefooterPhoto/2.png"
import PrefooterPhoto3 from "./../assets/PrefooterPhoto/3.png"
export function Prefooter() {
  return (
    <>
      <div className="ml-auto mr-auto mt-[15rem] w-[65%] flex justify-center flex-col">
        <h1 className="ml-auto mr-auto text-5xl ">
          Our Approach to fashion design
        </h1>
        <p className="text-center">
          at elegant vogue , we blend creativity with craftsmanship to create{" "}
          <br />
          fashion that transcends trends and stands the test of time each <br />
          design is meticulously crafted, ensuring the highest quelity <br />
          exqulsite finish
        </p>
      </div>
      <div className="ml-auto mr-auto mt-15 gap-15 flex w-[70%]">
        <img src={PrefooterPhoto1} alt="Photo" className="mt-15 h-[24rem]"/>
        <img src={PrefooterPhoto2} alt="Photo" className="h-[24rem]"/>
        <img src={PrefooterPhoto3} alt="Photo" className="mt-15 h-[24rem]"/>
      </div>
      <h1 className="mt-[10rem] text-gray-500 text-sm flex justify-center">© 2025 — copyright</h1>
    </>
  );
}
