
import Daily from "../daily/daily";
import { useState } from "react";
import Sidebar from "../student-sidebar/sidebar";
import WeeklySchedule from "../weakly/weakly";
import MobileNavbar from "../navbar/mobile-navbar";

const StudentPanel = () => {
  const [dailyData, setDailyData] = useState(true);

  const onToggleDaily = () => {
    setDailyData(prev => !prev);
  }

  return (
    <div className="flex w-full sm:h-[100vh] overflow-y-hidden ">
      <div className="  sm:hidden">
        <MobileNavbar />
      </div>
      <div className=" sm:flex  hidden  h-[100vh]  w-64  overflow-y-clip">
        <Sidebar />
      </div>
      <div className="bg-[#f0f2f5] w-full px-4  py-3  sm:overflow-y-auto  sm:pt-5    pt-20">
        <div className="bg-white shadow-md py-3 px-6 rounded-2xl flex justify-between items-center">
          <h1 className="text-[22px] font-extralight tracking-normal">
            Dars Jadvali
          </h1>
          <div className="flex space-x-2 bg-gray-500 rounded-lg px-2 py-2">
            <button
              onClick={onToggleDaily}
              className={` py-1 px-4 rounded cursor-pointer font-extralight ${
                dailyData ? "bg-gray-50" : "bg-gray-400"
              }`}
            >
              Kunlik
            </button>
            <button
              onClick={onToggleDaily}
              className={` py-1 px-4 rounded cursor-pointer font-extralight ${
                dailyData ? "bg-gray-400" : "bg-gray-50"
              }`}
            >
              Haftalik
            </button>
          </div>
        </div>

        <div className="mt-3">{dailyData ? <Daily /> : <WeeklySchedule />}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa
          cum eius nihil unde? Repudiandae saepe alias cum, eaque nam, ea
          voluptate autem sit amet quis voluptas? Blanditiis perferendis nemo
          nihil eligendi dolor? Vero vel deleniti quam, cum ducimus quos animi
          suscipit aliquid assumenda nihil, praesentium, maxime quod rerum
          corporis doloremque eum quo aspernatur ullam nostrum corrupti omnis
          ipsam inventore vitae. Mollitia cumque corporis nulla. Sed,
          repudiandae dicta voluptatem dolorum possimus fuga distinctio nobis
          voluptas blanditiis maiores quas vel tempore corrupti, ratione modi
          laborum non numquam! Iusto, ut nulla fugit eligendi nihil illum labore
          harum culpa? Optio maxime dolor, labore soluta dignissimos aliquam,
          nostrum quod blanditiis quas repellendus vero neque, ex ipsam alias
          unde reprehenderit laboriosam quidem libero. Ex, aliquid quia cum
          dolorem sed ad, reiciendis asperiores ipsum quaerat veritatis quo,
          sequi officiis. Provident aliquam veniam eius placeat ipsum. Velit
          fugiat, labore perspiciatis autem eum ullam, nisi sapiente quidem amet
          iure deserunt, eos qui illum quisquam voluptas! Quam dolorem expedita
          possimus ea laboriosam tenetur harum autem excepturi. Distinctio
          magnam laborum beatae at non veritatis placeat nulla iste cupiditate
          nostrum suscipit iure, adipisci facilis pariatur, expedita ab
          voluptatum numquam modi dolore consequatur. Quaerat facere ducimus,
          commodi vel explicabo officiis inventore provident illum. Ex quis
          eligendi, sapiente aperiam explicabo sint laudantium illo tempore,
          nisi iure error iusto quam. Facilis voluptates placeat illo similique,
          neque tempore reprehenderit! Incidunt velit, quod totam omnis tenetur
          rem veniam accusamus aspernatur deserunt! Voluptate libero, dolores
          dignissimos, molestiae consequatur consectetur ipsam saepe
          reprehenderit laudantium repellat, architecto quas hic. Similique
          ullam corporis maxime reiciendis amet numquam aut excepturi rem cum
          facere! Nam fugiat perspiciatis aspernatur aliquam dolor facilis
          consequatur quasi veritatis deleniti doloribus similique voluptate in
          necessitatibus numquam ea, eveniet accusantium harum. Aliquid fuga
          vitae explicabo ratione earum temporibus sed amet deserunt illum porro
          maiores ullam, quas quia sequi quis, vel laboriosam illo molestiae
          beatae dolor, omnis voluptatum facilis. Totam, repellat nobis tempore
          aperiam quasi fugiat sed consequuntur odit, explicabo deserunt
          voluptate tempora aliquam recusandae perferendis porro.
          Exercitationem, modi nihil laudantium debitis commodi beatae eius
          aperiam facilis minima provident ex quos veniam? Eos quia voluptate
          et, sapiente quod repellat numquam cupiditate asperiores odio,
          similique vel earum commodi aperiam magnam nihil cum impedit aliquid.
          In fugiat voluptatem porro incidunt harum earum nulla quas. Commodi
          adipisci laudantium, incidunt sint quas saepe reiciendis dolor illum
          quae sunt hic, ipsa voluptates! Magnam nihil ut provident consequuntur
          doloribus totam amet ea voluptas tenetur nisi. Repudiandae laborum
          distinctio iusto, labore saepe nihil tempora, reiciendis fugit iure,
          dolorem cumque modi mollitia impedit. Dolor iste assumenda saepe vel
          debitis sint magnam in eligendi! Itaque, inventore voluptas sunt
          exercitationem excepturi deleniti aspernatur dignissimos nemo totam
          veritatis. Aperiam laboriosam quae quam. Iste error a aut corporis
          voluptas dolorem quisquam temporibus autem fugit voluptate, totam illo
          laudantium maxime quo soluta obcaecati fuga amet! Perferendis nihil
          beatae, quam deserunt consectetur dolor? Asperiores, doloremque quia.
          Fugit nisi est doloremque placeat, asperiores aspernatur porro iusto
          expedita ratione sed fugiat corporis facere molestias delectus qui
          deleniti inventore. Quis quod illum aperiam iusto iste eum deserunt
          laudantium, pariatur voluptatum aut sunt laborum quibusdam blanditiis
          nostrum cupiditate ut quae, odio maiores velit. Dicta voluptates
          mollitia iste ex amet eligendi unde laborum tenetur, ad perferendis
          quas voluptate minus distinctio iure, adipisci quo est suscipit modi
          architecto? Asperiores amet maiores quibusdam adipisci modi provident
          eum quidem corporis recusandae soluta ea esse delectus ut aut cumque
          eos sed nostrum, mollitia deserunt ipsam quod nihil qui dolore dicta?
          At totam debitis nisi ex illum modi molestias dolor deleniti
          laboriosam ut, repellat aliquam. Quam repudiandae, dolores tempora
          eveniet labore voluptatum vel pariatur dolore minus autem magnam
          voluptatibus, delectus non vitae unde quas laborum impedit! Minima
          facilis illum ipsum odio praesentium dolorum cum aliquam nobis
          perspiciatis accusamus atque eaque dolor, asperiores, quia ad
          provident exercitationem reiciendis, eveniet quos repellendus.
          Doloribus, veniam ex? Rem assumenda quod ex sunt consectetur odio sint
          repudiandae, iste architecto modi dolore repellendus. Temporibus
          aliquam, soluta consequatur sit repellat eveniet cum eius eligendi
          necessitatibus nobis odio aut maiores totam qui maxime iure officia.
          Sequi error voluptas libero porro sunt suscipit inventore repellendus
          nam veniam necessitatibus perferendis in voluptates, ipsam eligendi
          consequatur accusamus explicabo hic sapiente vitae omnis repudiandae
          quae? Tempore aliquam veniam voluptatibus blanditiis necessitatibus.
          Tempora nobis iusto labore, fugit quas ducimus voluptas blanditiis
          deserunt itaque vero. Eveniet ullam tempora fugiat sint adipisci nisi
          accusamus saepe laborum voluptas, aspernatur molestias, quo eum
          dolores veritatis nam nulla placeat! Soluta veniam maiores eos minus
          nemo dolor optio quam perferendis nulla, dolorum ab earum vitae harum
          saepe cum ipsa quibusdam autem quasi molestiae doloremque repellat
          tenetur obcaecati natus aut! Minima sit dignissimos maxime aut ex
          magni ullam ea. Deserunt eaque voluptas repellendus dicta, corrupti
          consequuntur nulla officiis iure quasi sint debitis eos tempora
          praesentium repudiandae perspiciatis veniam odio quis ratione.
          Reiciendis iste delectus illo saepe explicabo similique,
          necessitatibus unde dolore sint earum ad consectetur accusantium
          cumque sapiente illum quae labore asperiores aspernatur laborum
          numquam odit excepturi. Eos laborum provident a quam veritatis
          incidunt neque! Culpa non nobis dolores iusto corrupti quisquam
          consectetur quidem quo ex voluptate, unde, tenetur magni minus
          voluptates nisi inventore! Et dolores eaque tenetur molestiae,
          voluptate soluta excepturi libero adipisci harum tempora laboriosam
          quia assumenda iusto obcaecati, laudantium earum modi. Sint doloribus
          fugiat nam eligendi provident numquam! Ut repellendus nam laboriosam
          unde vel ad, vero eveniet quas, aliquid iure assumenda recusandae
          quasi veritatis hic optio saepe. Sed molestiae non blanditiis dolore
          voluptates tenetur iure beatae. Asperiores sed adipisci facere
          dignissimos exercitationem est fuga illo aut consequatur nulla nostrum
          laboriosam earum labore veritatis, sit quas sunt similique deserunt!
          Distinctio ipsa, beatae, atque impedit sit, laboriosam quis quam
          minima ad voluptates quia iste voluptate numquam voluptatem architecto
          placeat nostrum sunt fugiat sapiente doloribus. Autem, laudantium
          esse. Error quae eos non blanditiis dolorem consequuntur, cum esse!
          Commodi atque eaque totam provident mollitia? Distinctio eveniet nemo
          nobis blanditiis architecto quaerat ipsum repellendus vero beatae
          deleniti. Velit incidunt reprehenderit, magnam eum qui reiciendis
          numquam saepe minus aspernatur consequatur temporibus consectetur
          facere, maiores facilis aliquid quisquam voluptates ea! Perferendis,
          in sed. Rerum perspiciatis tempore saepe!
        </p>
      </div>
    </div>
  );
}

export default StudentPanel;