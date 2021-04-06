import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";

import { createPost } from "../services/posts";

import "../styles/style.css";

const CreatePost = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      if(data.title === "" || data.body === "") return toast.error("Oops!! Houve um problema, certifique-se de preencher os campos");
      await createPost(data);
      toast.success("Post criado com sucesso!!");
      history.push("/list-posts");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };

  return (
    <div className="container">
      <h1>Criar uma nova publicação</h1>
      <Form func={onSubmit} />
    </div>
  );
};

export default CreatePost;
