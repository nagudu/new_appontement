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

export default function CustomLoanStatCard({
  title,
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

  let eligibleAmount =
    society.max_loan_amount_type === "Percentage"
      ? parseInt(society.contribution_balance) *
        (parseFloat(society.max_loan_amount) / 100)
      : society.max_loan_amount - parseInt(reports.balance || 0);

  return (
    <Col
      lg="4"
      sm="8"
      onClick={() => action()}
      // variant={`outline-${card_class}`}
      style={{ cursor: "pointer" }}
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
                style={{ color: theme.primary.main.color }}
              >
                Loan Eligibility Amount
              </Card.Title>
            </Col>
          </Row>
          <Row className="">
            <Col md={9} xs="9">
              <div>
                <span className="text-muted" style={{ fontSize: 24 }}>
                  {CURRENCY} {_formatNumber(eligibleAmount)}
                </span>
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

          <Row>
            <Col xs={12}>
              <Card.Title
                as="h5"
                className={` mb-2`}
                style={{ color: theme.primary.main.color }}
              >
                Outstanding Loan Balance
              </Card.Title>
            </Col>
          </Row>
          <Row className="">
            <Col md={9} xs="9">
              <div>
                <span className="text-muted" style={{ fontSize: 24 }}>
                  {CURRENCY} {_formatNumber(reports.balance)}
                </span>
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
