import React from 'react';
import SubPage from 'modules/common/SubPage';
import {refreshDictionaryList} from 'actions/DictionaryActions';
import {connect} from 'react-redux';
import {Icon, Table, Row, Col, Button} from 'antd';
import DictionaryList2 from './DictionaryList2';
import DictionarySearch from './DictionarySearch';

/**
 * Dictionary: zyj
 * Date: 16/7/19.
 * Time: 上午10:26.
 */
class DictionaryManager2 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(refreshDictionaryList());
    }

    view(id){
        this.history.push('/manager/dictionary/detail/'+ id);
    }

    add(){
        this.history.push('/manager/dictionary/form');
    }

    edit(id){
        this.history.push('/manager/dictionary/form/'+ id);
    }

    delete(id){
        this.props.dispatch(refreshDictionaryList(id));
    }

    render() {

        return (
            <div>
                <SubPage breadcrumb="/价格体系管理">
                    <Row gutter={16} className="bottom-space">
                        <Col>
                            <DictionarySearch {...this.props} onAdd={this.add}/>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col>
                            <DictionaryList2 {...this.props}  onEdit={this.edit} onView={this.view} onDelete={this.delete}/>
                        </Col>
                    </Row>
                </SubPage>
            </div>
        )
    }
};

export default connect(
    state => {
        let {dictionaryList2, dictionaryStatus, dictionaryCriteria} = state;
        return {
            dictionaryList2, dictionaryStatus, dictionaryCriteria
        }
    }
)(DictionaryManager2);