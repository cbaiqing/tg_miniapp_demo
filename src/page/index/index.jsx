import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom"
import { IndexBody, IndexBottom, IndexStyled } from "./styled";
import NavigateComp from "../../components/navigate";
import Task from "../../components/task";
import Invite from "../../components/invite";
import Betting from "../../components/betting";
import Ranking from "../../components/ranking";
import Mine from "../../components/mine";
import Loader from "../../components/loader";

const Index = () => {
    const [page, setPage] = useState(2);
    // const history = useHistory();

    const pageDom = useMemo(() => {
        return page == 0 ? <Task /> : page == 1 ? <Invite /> : page == 2 ? <Betting /> : page == 3 ? <Ranking /> : page == 4 ? <Mine /> : <Loader />
    }, [page])
    const _onNavigateChange = (i) => {
        setPage(i);
    }
    return <IndexStyled>
        <IndexBody>
            {pageDom}
        </IndexBody>
        <IndexBottom>
            <NavigateComp onNavigateChange={_onNavigateChange} />
        </IndexBottom>
    </IndexStyled>
}

export default Index;