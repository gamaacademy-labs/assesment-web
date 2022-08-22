import * as S from "./styled";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginUser } from "../../services/mainApi/user";
import { api } from "../../services/mainApi";
import { useNavigate } from "react-router-dom";
import { Input } from "@gama-academy/smash-web";

const validationSchema = Yup.object({
  username: Yup.string().required("*"),
});

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      const token  = await loginUser({username: values.username});
      
      if (!token) {
        alert("Senha ou usuário inválidos!");
        return;
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(token));
      alert("Usuário logado!");
      formik.resetForm();
      navigate("/");
    },
  });

  return (
    <S.SContainer>
      <S.SForm onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Input
            label="Username"
            name="username"
            onChange={formik.handleChange}
            placeholder="Type here"
            startAdornment={
              <img
                src="https://imgur.com/aBZXHy0.png"
                style={{ height: 20, width: 20 }}
              />
            }
            value={formik.values.username}
            type="text"
            id="username"
          />
          {formik.errors.username && <span>{formik.errors.username}</span>}
        </Form.Group>

        <S.SButton
          buttonType="submit"
          onClick={function noRefCheck() {}}
          size="1"
        >
          Login
        </S.SButton>
      </S.SForm>
    </S.SContainer>
  );
};
