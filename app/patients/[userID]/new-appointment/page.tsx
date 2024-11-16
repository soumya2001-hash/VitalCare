import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";


export default async function NewAppointment({params: {userID}} : SearchParamProps) {
  const patient = await getPatient(userID);
  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
          src="/assets/icons/logo_full_final.png"
          height={1000}
          width={1000}
          alt="Logo"
          className="mb-12 h-10 w-fit"
          />

          <AppointmentForm type="create" userID={userID} patientID={patient.$id} />
          <p className="copyright mt-10 py-12">© 2024 VitalCare</p>
          
        </div>
      </section>
      <Image 
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="Appointment"
        className="max-w-[390px] bg-bottom"
      />
    </div>
  )
}