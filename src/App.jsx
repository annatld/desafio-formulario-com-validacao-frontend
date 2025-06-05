
import './App.css'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

function App() {
  const schema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    telefone: z.string().min(1, "Telefone é obrigatório"),
    cargo: z.enum([
      "Desenvolvedor Frontend",
      "Desenvolvedor Backend",
      "Desenvolvedor Full Stack",
      "Desenvolvedor Mobile",
      "Desenvolvedor de Software",
      "Engenheiro de Software",
      "Arquiteto de Software",
      "UI/UX Designer",
      "Analista de Sistemas",
      "Analista Programador",
      "DevOps Engineer",
      "Engenheiro de Dados",
      "QA Engineer",
      "Scrum Master",
      "Product Owner"
    ]),
    linkedin: z.string().optional(),
    github: z.string().optional()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    try {
      const members = JSON.parse(localStorage.getItem("members")) || [];
      members.push(data);
      localStorage.setItem("members", JSON.stringify(members));
      alert("Cadastro realizado com sucesso");
    } catch (error) {
      alert("Falha ao cadastrar. Verifique os dados");
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-gray-700 mt-10 p-4 border border-gray-700 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4 text-white">Cadastrar-se</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className="text-white">
          <label>Nome Completo</label>
          <input type="text" {...register("nome")} className="w-full bg-gray-600 p-2 rounded-lg" />
          {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
        </div>

        <div className="text-white">
          <label>Email</label>
          <input type="email" {...register("email")} className="w-full bg-gray-600 p-2 rounded-lg" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="text-white">
          <label>Telefone</label>
          <input type="text" {...register("telefone")} className="w-full bg-gray-600 p-2 rounded-lg" />
          {errors.telefone && <p className="text-red-500">{errors.telefone.message}</p>}
        </div>

        <div className="text-white">
          <label>Cargo</label>
          <select {...register("cargo")} className="w-full bg-gray-600 p-2 rounded-lg">
            <option value="">Selecione...</option>
            <option>Desenvolvedor Frontend</option>
            <option>Desenvolvedor Backend</option>
            <option>Desenvolvedor Full Stack</option>
            <option>Desenvolvedor Mobile</option>
            <option>Desenvolvedor de Software</option>
            <option>Engenheiro de Software</option>
            <option>Arquiteto de Software</option>
            <option>UI/UX Designer</option>
            <option>Analista de Sistemas</option>
            <option>Analista Programador</option>
            <option>DevOps Engineer</option>
            <option>Engenheiro de Dados</option>
            <option>QA Engineer</option>
            <option>Scrum Master</option>
            <option>Product Owner</option>
          </select>
          {errors.cargo && <p className="text-red-500">{errors.cargo.message}</p>}
        </div>

        <div className="text-white">
          <label>LinkedIn</label>
          <input type="url" {...register("linkedin")} className="w-full bg-gray-600 p-2 rounded-lg" />
        </div>

        <div className="text-white">
          <label>GitHub</label>
          <input type="url" {...register("github")} className="w-full bg-gray-600 p-2 rounded-lg" />
        </div>
      
        <div className="flex items-center space-x-2">
  <input
    type="checkbox"
    {...register("termos")}
     className="h-5 w-5 appearance-none border-2 border-gray-500 rounded checked:bg-gray-900 checked:border-gray-900 checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:text-center checked:after:leading-5"
/>
  <label className="text-gray-200">
    Eu concordo com os <a href="#" className="underline">Termos</a>
  </label>
</div>
{errors.termos && <p className="text-red-500">{errors.termos.message}</p>}


        <button type="submit" className="bg-gray-800 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;

