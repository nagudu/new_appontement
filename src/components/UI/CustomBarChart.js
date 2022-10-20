import ChartistGraph from 'react-chartist'
import { Card, Col, Row } from 'react-bootstrap'
import { Button, Container } from 'reactstrap'
import { useHistory } from 'react-router'
import { getDashboardGraph } from 'redux/actions/reports'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from './CustomButton'
import { themeClass } from 'variables'
import { useLocation } from 'react-router'
import { getUserDashboardGraph } from 'redux/actions/reports'
import { getRoleLink } from 'views/helper'

export default function CustomBarChart({
  title,
  action = (f) => f,
  items = [],
  card_id,
  sub_title,
  footer,
  data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    series: [
      [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
      [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
    ],
  },
  range = {},
}) {
  const history = useHistory()
  const location = useLocation()
  const colors = ['info', 'success', 'danger', 'primary', 'warning']
  const isMembersDashboard =
    location.pathname.includes('/member-dashboard') ||
    location.pathname.includes('/member/dashboard')

  const dispatch = useDispatch()
  const society = useSelector((state) => state.auth.society)
  const user = useSelector((state) => state.auth.user)
  const reports = useSelector((state) => state.reports)[title + ' Graph'] || {}

  useEffect(() => {
    if (isMembersDashboard) {
      dispatch(
        getUserDashboardGraph({
          query_type: title,
          society_id: society.id,
          from: range.from,
          to: range.to,
          user_id: user.id,
        }),
      )
    } else {
      dispatch(
        getDashboardGraph({
          query_type: title,
          society_id: society.id,
          from: range.from,
          to: range.to,
        }),
      )
    }
  }, [society.id, dispatch, range.from, range.to])

  return (
    <Row id={card_id}>
      <Col md="12">
        <Card>
          <Card.Header>
            <Row>
              <Col md="6">
                <Card.Title as="h4">{title}</Card.Title>
                <p className="card-category">{sub_title}</p>
              </Col>
              <Col md="6" className="text-right">
                <CustomButton
                  color={themeClass.split('-')[1]}
                  size="sm"
                  onClick={() =>
                    history.push(
                      getRoleLink(`/report-details?report_type=${title}&from=${range.from}&to=${range.to}`),
                    )
                  }
                >
                  View Report
                </CustomButton>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart mx-5" id="chartActivity">
              <ChartistGraph
                data={reports}
                type="Bar"
                options={{
                  seriesBarDistance: 10,
                  axisX: {
                    showGrid: false,
                  },
                  height: '245px',
                }}
                responsiveOptions={[
                  [
                    'screen and (max-width: 640px)',
                    {
                      seriesBarDistance: 5,
                      axisX: {
                        labelInterpolationFnc: function (value) {
                          return value[0]
                        },
                      },
                    },
                  ],
                ]}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="legend">
              {items.map((itm, i) => (
                <p key={i}>
                  {' '}
                  <i className={`fas fa-circle text-${colors[i]}`}></i>
                  {items[i].name}{' '}
                </p>
              ))}
            </div>
            <hr></hr>
          </Card.Footer>
          <Row>
            <Col md="6" className="px-5 pb-1">
              <CustomButton
                color={themeClass.split('-')[1]}
                onClick={() => action()}
                size="sm"
              >
                <i class="fas fa-arrow-up"></i> Top
              </CustomButton>
            </Col>
            <Col md="6" className="px-5 pb-1 text-right">
              {footer}
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
