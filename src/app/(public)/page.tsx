import AboutUsSection from "@/components/site/home/sections/AboutUsSection";
import SectionContact from "@/components/site/home/sections/ContactSection";
import HeroSection from "@/components/site/home/sections/HeroSection";
import KindCarsSection from "@/components/site/home/sections/KindCarsSection";
import SessionBase from "@/components/site/home/SessionBase";
import { roboto, zilla_Slab } from "@/utils/fonts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <SessionBase>
        <HeroSection />
      </SessionBase>

      <SessionBase className="p-8 text-[#282626]">
        <h2>teste</h2>
      </SessionBase>
      {/* second section - about kind of cars us worked */}
      <div
        className={`flex border-b w-full
        bg-gray-200 py-14 text-[#282626]
        ${zilla_Slab.className}`}
      >
        <KindCarsSection />
      </div>

      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">work</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">help</h1>
      </div>
      <div
        className={`flex flex-col justify-center items-center border-b w-full
        bg-amber-300 py-14 text-[#282626]
        ${zilla_Slab.className}`}
      >
        <h1 className="text-3xl">Fornecedores</h1>
        <p>usiquimica</p>
        <p>mundial quimica</p>
        <p>prolink quimica</p>
      </div>

      {/* section about us */}
      <div
        className={`flex flex-col justify-center items-center
        border-b w-full py-9 pb-14
        bg-[#4682b4] ${roboto.className}`}
      >
        <AboutUsSection />
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">video</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">why us?</h1>
      </div>
      <div className="flex flex-col border my-4 justify-center items-center">
        <h1 className="text-3xl">quote</h1>
        <h2>parabola do semeador Mateus 13:1-23 </h2>
        <p>
          Naquele mesmo dia Jesus saiu de casa, foi para a beira do lago da
          Galileia, sentou-se ali e começou a ensinar. A multidão que se ajuntou
          em volta dele era tão grande, que ele entrou num barco e sentou-se; e
          o povo ficou em pé na praia. Jesus usou parábolas para ensinar muitas
          coisas. Ele disse: — Escutem! Certo homem saiu para semear. Quando
          estava espalhando as sementes, algumas caíram na beira do caminho, e
          os passarinhos comeram tudo. Outra parte das sementes caiu num lugar
          onde havia muitas pedras e pouca terra. As sementes brotaram logo
          porque a terra não era funda. Mas, quando o sol apareceu, queimou as
          plantas, e elas secaram porque não tinham raízes. Outras sementes
          caíram no meio de espinhos, que cresceram e sufocaram as plantas. Mas
          as sementes que caíram em terra boa produziram na base de cem, de
          sessenta e de trinta grãos por um. E Jesus terminou, dizendo: — Se
          vocês têm ouvidos para ouvir, então ouçam. Então os discípulos
          chegaram perto de Jesus e perguntaram: — Por que é que o senhor usa
          parábolas para falar com essas pessoas? Jesus respondeu: — A vocês
          Deus mostra os segredos do Reino do Céu, mas, a elas, não. Pois quem
          tem receberá mais, para que tenha mais ainda. Mas quem não tem, até o
          pouco que tem lhe será tirado. É por isso que eu uso parábolas para
          falar com essas pessoas. Porque elas olham e não enxergam; escutam e
          não ouvem, nem entendem. E assim acontece com essas pessoas o que
          disse o profeta Isaías: “Vocês ouvirão, mas não entenderão; olharão,
          mas não enxergarão nada. Pois a mente deste povo está fechada: Eles
          taparam os ouvidos e fecharam os olhos. Se eles não tivessem feito
          isso, os seus olhos poderiam ver, e os seus ouvidos poderiam ouvir; a
          sua mente poderia entender, e eles voltariam para mim, e eu os
          curaria! — disse Deus.” Jesus continuou, dizendo: — Mas vocês, como
          são felizes! Pois os seus olhos veem, e os seus ouvidos ouvem. Eu
          afirmo a vocês que isto é verdade: muitos profetas e muitas outras
          pessoas do povo de Deus gostariam de ver o que vocês estão vendo, mas
          não puderam; e gostariam de ouvir o que vocês estão ouvindo, mas não
          ouviram. — Então escutem e aprendam o que a parábola do semeador quer
          dizer. As pessoas que ouvem a mensagem do Reino, mas não a entendem,
          são como as sementes que foram semeadas na beira do caminho. O Maligno
          vem e tira o que foi semeado no coração delas. As sementes que foram
          semeadas onde havia muitas pedras são as pessoas que ouvem a mensagem
          e a aceitam logo com alegria, mas duram pouco porque não têm raiz. E,
          quando por causa da mensagem chegam os sofrimentos e as perseguições,
          elas logo abandonam a sua fé. Outras pessoas são parecidas com as
          sementes que foram semeadas no meio dos espinhos. Elas ouvem a
          mensagem, mas as preocupações deste mundo e a ilusão das riquezas
          sufocam a mensagem, e essas pessoas não produzem frutos. E as sementes
          que foram semeadas em terra boa são aquelas pessoas que ouvem, e
          entendem a mensagem, e produzem uma grande colheita: umas, cem;
          outras, sessenta; e ainda outras, trinta vezes mais do que foi
          semeado.
        </p>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">get in touch</h1>
      </div>

      {/* section contact */}
      <div
        className={`flex flex-col justify-center items-center
        border-b w-full py-9 pb-14
         bg-gray-200 ${roboto.className}`}
      >
        <SectionContact />
      </div>

      <div className="flex ">
        <div className="w-1/3 border p-3">
          <h2>O que voce pode encontrar na Santana Quimica?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sit est officia sed ipsam, quos placeat beatae voluptatibus natus
            aspernatur veritatis, libero molestias possimus quidem asperiores,
            dolorem non laboriosam atque.
          </p>
        </div>
        <div className="w-1/3 border p-3">
          <h2>Nosso diferencial</h2>p Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores, consequatur rem. Ipsa ab sapiente dicta
          similique fuga aspernatur, consectetur optio quaerat iusto molestias,
          magnam doloremque vero libero est distinctio quisquam?
        </div>
        <div className="w-1/3 border p-3">
          <h2>O que voce pode encontrar na Santana Quimica?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            nulla. Odit consectetur dolorum, assumenda dolore perferendis
            maxime. Distinctio cumque optio exercitationem nostrum quae natus
            rerum, officiis ab inventore odio aliquid.
          </p>
        </div>
      </div>
    </main>
  );
}
