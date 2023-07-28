// imports
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import CellToForm from "../../UI/CellToForm/CellToForm";
//css
import classes from "./ExpandedTable.module.css";
//overmind
import { useActions, useAppState } from "../../../overmind";

const ExpandedTable = () => {
  const [tabSel, setTabSel] = useState("inputs");
  //overmind
  const actions = useActions();
  const state = useAppState();
  const inputs = state.editPage.lineList.inputs;
  const outputs = state.editPage.lineList.outputs;
  const groups = state.editPage.lineList.groups;
  //

  return (
    <div>
      {state.editPage.editEnable && (
        <div className={classes.warningWrap}>
          <small className={classes.smallWarning}>Edit Mode: Click Cell To Edit</small>
        </div>
      )}
      <Nav variant='tabs' defaultActiveKey='Inputs'>
        <Nav.Item>
          <Nav.Link eventKey='Inputs' onClick={() => setTabSel("inputs")}>
            Inputs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='Outputs' onClick={() => setTabSel("outputs")}>
            Outputs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='Groups' onClick={() => setTabSel("groups")}>
            Groups
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='test1' onClick={() => setTabSel("test1")}>
            test1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='test2' onClick={() => setTabSel("test2")}>
            test2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className={classes.table}>
        {tabSel === "inputs" && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <strong>#</strong>
                </th>
                <th>Name</th>
                <th>Mic</th>
                <th>Stand</th>
                <th>Position</th>
                <th>Rack</th>
                <th>Comment</th>
                <th>Group</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((input) => (
                <tr onClick={() => actions.setSelectedObj(input)} key={input.id}>
                  <td>
                    <strong>{input.patchNo}</strong>
                  </td>
                  <CellToForm obj={input} propety='name' />
                  <CellToForm obj={input} propety='mic' />
                  <CellToForm obj={input} propety='stand' />
                  <CellToForm obj={input} propety='pos' />
                  <CellToForm obj={input} propety='stagebox' />
                  <CellToForm obj={input} propety='comment' />
                  <CellToForm obj={input} propety='group' />
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {tabSel === "outputs" && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <strong>#</strong>
                </th>
                <th>Name</th>
                <th>Device</th>
                <th>Position</th>
                <th>Rack</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {outputs.map((output) => (
                <tr key={output.id}>
                  <td>
                    <strong>{output.id}</strong>
                  </td>
                  <td>{output.name}</td>
                  <td>{output.device}</td>
                  <td>{output.pos}</td>
                  <td>{output.stagebox}</td>
                  <td>{output.comment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {tabSel === "groups" && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <strong>#</strong>
                </th>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.id}>
                  <td style={{ backgroundColor: `${group.color}` }}>
                    <strong>{group.id}</strong>
                  </td>
                  <td style={{ backgroundColor: `${group.color}` }}>{group.name}</td>
                  <td style={{ backgroundColor: `${group.color}` }}>{groups.members}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ExpandedTable;
