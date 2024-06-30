import { ReactElement } from "react";
import { useAppSelector } from "../../store";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import Block, { blockTypes } from "../../components/Block";
import NavigationContainer from "../../components/NavigationContainer";
import GeneralLayout from "../../layouts/General";
import "./style.css";

const ProfilePage = (): ReactElement => {
    const currentUser = useAppSelector((state) => state.user.currentUser);

    return (
        <ProtectedRoute>
            <GeneralLayout>
                <div className="profile-page">
                    <NavigationContainer title={"Profile"} />
                    <div className="profile-header">
                        <Block
                            type={blockTypes.ROUNDED}
                            width="80px"
                            height="80px"
                        >
                            Avatar
                        </Block>
                        <Block type={blockTypes.TEXT}>
                            {currentUser.getEmail()}
                        </Block>
                    </div>
                    <div className="profile-info">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ratione commodi itaque corporis non doloremque
                            quidem dolore ipsa consequatur, explicabo laborum
                            laudantium eveniet deserunt ad repellendus? Sequi
                            magni voluptatem illum blanditiis? Aperiam commodi
                            dicta temporibus totam. Aut, ab cum! Sapiente sequi
                            a, dicta at dolor et totam mollitia in illum
                            explicabo, commodi, ea assumenda corrupti aspernatur
                            natus iure quidem provident ex? Optio molestias
                            possimus, reiciendis culpa, minima corporis deleniti
                            assumenda iure rerum suscipit saepe iusto vero odit
                            aperiam veritatis vitae magni facilis? Voluptatum
                            quae sint eius ratione nam adipisci perspiciatis
                            fugit. Maiores asperiores eos a sapiente iste,
                            voluptate fugit illum sint doloribus dignissimos
                            commodi nihil cumque ducimus possimus, quam non?
                            Delectus architecto in corporis, velit libero
                            voluptatum consequatur rem eligendi ipsam. Deleniti
                            aperiam pariatur quae perferendis, fuga neque,
                            assumenda nemo vitae iure autem itaque libero vero
                            asperiores? Natus, eligendi officiis nemo non
                            tenetur, recusandae rerum hic aspernatur, maxime
                            laborum itaque deleniti.
                        </p>
                    </div>
                </div>
            </GeneralLayout>
        </ProtectedRoute>
    );
};

export default ProfilePage;
