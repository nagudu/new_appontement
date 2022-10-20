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
import { formatNumber,_formatNumber } from "./helpers";

export default function CustomLoanStatCardAdmin({
  title,
  action = (f) => f,
  range = {},
  _title='',
  card_class = "",
  card_font = "",
  onDefaultersClick = (f) => f,
  defaultText = "",
  numberOfDefaulter = 0,
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
      onClick={() => action()}
      // variant={`outline-${card_class}`}
      //
    >
      <Card className="card-stats border-primary-custom">
        {/* {JSON.stringify(reports)} */}
        <Card.Body>
          <div onClick={() => action()} style={{ cursor: "pointer" }}>
            <Row>
              <Col xs={12}>
                <Card.Title
                  as="h5"
                  className={` mb-2`}
                  style={{ color: theme.primary.main.color }}
                >
                  {_title?_title:title}
                </Card.Title>
              </Col>
            </Row>
            <Row className="">
              <Col md={3} className="text-left   pr-2">
                <i
                  className={`${card_font}  pr-2`}
                  style={{ fontSize: "35px", color: theme.primary.main.color }}
                ></i>
              </Col>
              <Col md={9} xs="9">
                <div>
                  <span className="text-muted" style={{ fontSize: 24 }}>
                    {CURRENCY} {_formatNumber(reports.balance )}
                  </span>
                  {isMembersDashboard ? (
                    <div className="my-3" />
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
          </div>
          {/* <Row>
            <Col xs={12}>
              <Card.Title
                as="h5"
                className={` mb-2`}
                style={{ color: theme.primary.main.color }}
              >
                Defaulters
              </Card.Title>
            </Col>
          </Row> */}

          {/* members sections */}
          <div onClick={onDefaultersClick} style={{ cursor: "pointer" }}>
            {/* <Row className="mt-4">
              <Col xs={12}>
                <Card.Title
                  as="h5"
                  className={` mb-2`}
                  style={{ color: theme.primary.main.color }}
                >
                  Defaulters
                </Card.Title>
              </Col>
            </Row> */}
            <Row className="mt-1">
              <Col md={3} xs="3"></Col>
              <Col md={9} xs="9">
                {/* <p
                className={` text-sm my-2`}
                style={{ color: theme.primary.main.color }}
              >
                <span className="">Defaulters</span>
              </p> */}

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  style={{
                    textDecoration: "underline",
                    color: theme.primary.main.backgroundColor,
                  }}
                >
                  {/* {reports.members ? formatNumber(numberOfDefaulter) : ""}{" "} */}
                  {defaultText}
                </a>

                <Row className="mt-2"></Row>
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
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
