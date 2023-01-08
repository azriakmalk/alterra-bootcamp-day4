import React from "react";
import { useForm } from "react-hook-form";

export default function About() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    alert(`Data Pendaftar ${data.nama} Berhasil Diterima`)
    reset();
  };
  return (
    <div className="grid justify-center w-full">
      <p className="font-bold text-2xl">Pendaftaran Peserta Coding Bootcamp</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-2">
          <label>Nama Lengkap:</label>
          <input
            className="border border-black rounded-md"
            {...register("nama",{
                required: {
                    value: true,
                    message: "Nama Lengkap Harus Diisi"
                },
                pattern: {
                    value : /^[A-Za-z ]+$/,
                    message : "Nama Lengkap Harus Berupa Huruf"
                }
            })}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label>Email :</label>
          <input
            type="email"
            className="border border-black rounded-md"
            {...register("email", {
              required: {
                value: true,
                message: "Email Harus Diisi"
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email Tidak Sesuai",
              },
            })}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label>No Handphone:</label>
          <input
            className="border border-black rounded-md"
            {...register("no_hp", {
                required: {
                    value: true,
                    message: "No Handphone Harus Diisi"
                },
                pattern: {
                    value: /^[0-9]+$/,
                    message: "No Handphone Tidak Sesuai"
                },
                minLength: {
                    value: 9,
                    message: "No Handphone Minimal 9 Angka"
                },
                maxLength: {
                    value: 14,
                    message: "No Handphone Maksimal 14 Angka"
                }
            })}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label>Latar Belakang Pendidikan:</label>
          <div className="flex gap-3">
            <div>
              <input
                defaultValue="IT"
                type="radio"
                name="latar_belakang"
                className="mr-1"
                {...register("latar_belakang")}
              />
              <label>IT</label>
            </div>
            <div>
              <input
                defaultValue="Non IT"
                type="radio"
                name="latar_belakang"
                className="mr-1"
                {...register("latar_belakang")}
              />
              <label>Non IT</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label>Kelas Coding yang Dipilih:</label>
          <select
            defaultValue=""
            className="border border-black rounded-md"
            {...register("kelas")}
          >
            <option value="" disabled>
              Pilih Salah Satu Program
            </option>
            <option value="Coding Backend with Golang">
              Coding Backend with Golang
            </option>
            <option value="Coding Frontend with ReactJS">
              Coding Frontend with ReactJS
            </option>
            <option value="Fullstack Developer">
              Fullstack Developer
            </option>
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label>Foto Surat Kesungguhan:</label>
          <input type="file" {...register("file")}/>
        </div>
        <div className="flex flex-col mt-2">
          <label>Harapan Untuk Coding Bootcamp ini:</label>
          <textarea
            rows="4"
            className="border border-black rounded-md"
            {...register('harapan')}
          ></textarea>
        </div>
        <div className="flex flex-col mt-2">
            {errors.nama && (<label className="text-red-500 font-bold">{errors.nama.message}</label>)}
            {errors.email && (<label className="text-red-500 font-bold">{errors.email.message}</label>)}
            {errors.no_hp && (<label className="text-red-500 font-bold">{errors.no_hp.message}</label>)}
        </div>
        <div className="flex gap-5 mt-5">
          <input
            type="submit"
            defaultValue="Submit"
            className="bg-green-700 w-24 h-8 rounded-md text-white"
          />
          <input
            type="button"
            defaultValue="Reset"
            className="bg-red-600 w-24 h-8 rounded-md text-white"
            onClick={()=>reset()}
          />
        </div>
      </form>
    </div>
  );
}
