import React from "react";
import "../Post.css";
import img01 from '../../images/post01.png'

const Post01 = () => {
  return <div className="post-container">
    <h3 className="post-headline">
      Headline 
    </h3> <hr /><br />
    <div className="post-info">
      <h5>Category</h5>
      <h5>Post no.</h5>
      <h5>Published date</h5>
    </div>
    <hr /><br />
    <div className="post-body">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti odit eum nobis! Unde iure adipisci architecto voluptatem illo libero odio iusto ratione eius, quo tenetur fuga. Voluptatum sed molestiae veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, facere pariatur consequuntur magnam, suscipit exercitationem ipsam mollitia praesentium recusandae esse temporibus. Quo optio non molestias similique, molestiae, natus laborum fugiat dolorem, ex veritatis quod perferendis voluptatum ab quidem blanditiis id cumque! Sed, reprehenderit architecto similique voluptatem quaerat facere cumque? Iure quo facilis sit quas iusto non, maxime, nihil sequi tenetur voluptate corporis ea ducimus. Quidem esse doloremque nulla sequi quos tempora eum distinctio expedita, dolore sed laudantium eveniet iste totam! Veniam nesciunt excepturi laboriosam explicabo! Laboriosam alias natus ipsa ipsam id omnis ea, vel harum, doloribus perferendis iusto optio eveniet.</p> <br />
      <img src={img01} alt="post 01" />
      <p className="img-caption">Caption </p>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda amet, repellat sit laborum asperiores nemo et corrupti minima enim quas dicta vitae autem, impedit iusto earum accusantium. Debitis odit facere corrupti sunt sequi fugit ut. Explicabo, delectus reprehenderit corrupti est dolore, nihil voluptate officia aliquid corporis odio autem, porro molestiae qui quibusdam! Est odio voluptatibus iusto velit ipsa assumenda nulla repellendus sed esse, dignissimos officiis necessitatibus eius, quas ipsam illo? In quisquam perferendis corrupti repellendus doloremque nam iure harum necessitatibus commodi non laborum placeat eligendi quos accusamus, amet soluta labore voluptas optio saepe! Rem ipsam optio est aperiam reprehenderit aliquam voluptatibus at expedita cumque non atque adipisci accusamus culpa ratione maxime eos beatae alias, laboriosam eius. Quibusdam, eum aliquam? Atque unde id qui quod beatae, tempore repudiandae. Quasi fuga incidunt, optio, laborum eius reprehenderit voluptatum reiciendis harum mollitia sed necessitatibus amet molestiae voluptatibus hic explicabo ipsam, dolor debitis rerum temporibus vel! Quae soluta deleniti omnis quibusdam rerum! Id maiores voluptatum accusamus dicta aperiam ipsam consequatur. Praesentium asperiores in recusandae reprehenderit cum id, quam laboriosam quisquam laudantium corrupti quidem voluptatem, magnam et. Eveniet assumenda ad vitae aut totam sunt dignissimos necessitatibus. Tempore pariatur culpa, facilis debitis id dicta blanditiis quos quisquam.</p>
    </div>
  </div>;
};

export default Post01;
