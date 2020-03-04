import {RouteComponentProps} from 'react-router';

type PathParamsType = {
    id: string; //参数:this.props.match.params.*
};

export default interface RouterProps extends RouteComponentProps<PathParamsType> {
    // location: any;
}
