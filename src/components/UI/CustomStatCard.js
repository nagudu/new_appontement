import { useEffect } from "react";
import {
  Card,
  Navbar,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Button } from "reactstrap";
import { getUserDashboardSummary } from "redux/actions/reports";
import { getDashboardSummary } from "redux/actions/reports";
import { theme } from "variables";
import { CURRENCY } from "variables";
import { formatNumber, _formatNumber } from "./helpers";

export default function CustomStatCard({
  title,
  _title,
  card_font = "fas fa-money-bill-alt",
  card_target,
  card_class = "primary-custom",
  data = [],
  link,
  action = (f) => f,
  range = {},
}) {
  const location = useLocation();
  const isMembersDashboard =
    location.pathname.includes("/member-dashboard") ||
    location.pathname.includes("/member/dashboard");
  const dispatch = useDispatch();
  const society = useSelector((state) => state.auth.society);
  const user = useSelector((state) => state.auth.user);
  const reports =
    useSelector((state) => state.reports)[title + " Summary"] || {};

  useEffect(() => {
    if (isMembersDashboard) {
      dispatch(
        getUserDashboardSummary({
          query_type: title,
          society_id: society.id,
          from: range.from,
          to: range.to,
          user_id: user.id,
        })
      );
    } else {
      dispatch(
        getDashboardSummary({
          query_type: title,
          society_id: society.id,
          from: range.from,
          to: range.to,
        })
      );
    }
  }, [society.id, dispatch, range.from, range.to]);
  return (
    <Col
      lg="4"
      sm="8"
      // onClick={() => action()}
      // variant={`outline-${card_class}`}
      // style={{ cursor: "pointer" }}
    >
      <Card
        className="card-stats border-primary-custom"
        style={{ height: 155 }}
      >
        {/* {JSON.stringify(reports)} */}
        <Card.Body>
          <Row>
            <Col xs={12}>
              <Card.Title
                as="h5"
                className={` mb-2`}
                onClick={() => action()}
                style={{ color: theme.primary.main.color,cursor: "pointer" }}
              >
                {_title ? _title : title}
              </Card.Title>
            </Col>
          </Row>
          <Row className="">
            <Col onClick={() => action()} md={3} className="text-left   pr-2" style={{ cursor: "pointer" }}>
              <i
                className={`${card_font}  pr-2`}
                style={{ fontSize: "35px", color: theme.primary.main.color }}
              ></i>
            </Col>

            <Col md={9} xs="9">
              <div>
                <span onClick={() => action()} className="text-muted" style={{ fontSize: 24, cursor: "pointer" }}>
                  {CURRENCY}

                  {_formatNumber(reports.balance)}
                </span>
                {isMembersDashboard ? (
                  <p
                    className={` text-sm my-4`}
                    style={{ color: theme.primary.main.color,cursor:"pointer" }}
                  >
                    <span className="" style={{ textDecoration: "underline",}}>View Details</span>
                  </p>
                ) : (
                  <p
                    className={` text-sm`}
                    style={{ color: theme.primary.main.color }}
                  >
                    <span className="">
                      {formatNumber(reports.members)} Member(s)
                    </span>
                  </p>
                )}
              </div>
              <Row></Row>
              {/* {data.map((d, i) => (
                <Row key={i}>
                  <p className={`text-muted text-sm text-${card_class}`}>
                    <span className="">{data[i].key}</span>:
                    <span className="text-muted">{data[i].val}</span>{' '}
                  </p>
                </Row>
              ))} */}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
