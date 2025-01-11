import SubRoutesTCG from "../../../lib/routes/SubRoutesTCG";
import AddLinks from "../../../lib/scripts/AddLinks";
import AddRoutes from "../../../lib/scripts/AddRoutes";

function TCG() {
  return (
    <main>
      <div>
        <AddLinks mapLinks={SubRoutesTCG} baseUrl="/tcg/"/>
      </div>
     <AddRoutes mapRoutes={SubRoutesTCG}/>
    </main>
  );
}

export default TCG;
