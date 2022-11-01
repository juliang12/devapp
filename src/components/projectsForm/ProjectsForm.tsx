import { useLogged } from "@/context/StateProvider";
import useForm from "@/hooks/useForm";
import { db, storage } from "@/services/firebase/firebaseConfig";
import {
  ButtonForm,
  Error,
  FormContainer,
  InputContainer,
  Label,
  TextDescription,
  TextInput,
} from "@/styles/Form";
import validateCreateProject from "@/validations/validateCreateProject";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { useState } from "react";

const INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
};

const ProjectsForm = () => {
  const [urlImage, setUrlImage] = useState<any>("");
  const context = useLogged();
  const { values, errors, handleChange, handleSubmit } = useForm(
    INITIAL_STATE,
    validateCreateProject,
    handleProject
  );
  const refDoc = collection(db, "projects");

  const { name, image, description } = values;

  async function handleProject() {
    const project = {
      name,
      image: urlImage,
      description,
      votos: 0,
      comments: [],
      creado: Date.now(),
      creador: { id: context?.uid, name: context?.displayName },
      haVotado: [],
    };
    await addDoc(refDoc, project);
  }

  async function uploadImage(file: any) {
    console.log(file);
    const imageRef = ref(storage, `project/${file.name}`);
    await uploadBytes(imageRef, file);

    const url = await getDownloadURL(imageRef);
    console.log(url);
    setUrlImage(url);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Label>Nombre del Proyecto</Label>
        <TextInput
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          value={name}
          onChange={handleChange}
        />
        {errors.name && <Error>{errors.name}</Error>}
      </InputContainer>
      <InputContainer>
        <Label>Imagen del Proyecto</Label>
        <TextInput
          type="file"
          onChange={(e: any) => uploadImage(e.target.files[0])}
        />
        {errors.image && <Error>{errors.image}</Error>}
      </InputContainer>
      <InputContainer>
        <Label>Descripcion</Label>
        <TextDescription
          name="description"
          value={description}
          onChange={handleChange}
        ></TextDescription>
        {errors.description && <Error>{errors.description}</Error>}
      </InputContainer>
      <ButtonForm>Agregar Proyecto</ButtonForm>
    </FormContainer>
  );
};

export default ProjectsForm;
