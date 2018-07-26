import React from "react";
import { mountComponent, expect } from "../../helper";
import CourtDetail from "../../../src/app/components/courts/CourtDetail";
import ImageList from "../../../src/app/components/images/ImageList";
import Rating from "../../../src/app/components/ratings/Rating";
import TeamList from "../../../src/app/components/teams/TeamList";
import GoogleMap from "../../../src/app/components/maps/GoogleMap";
import ReviewList from "../../../src/app/components/reviews/ReviewList";

describe("<CourtDetail />", () => {

    it("render without error", () => {
        const component = mountComponent(CourtDetail);

        expect(component.html()).to.be.not.empty;
    })

    it("render the corresponding component correctly", () => {
        const props = {
            courtId: "1",
            courtName: "Sena",
            courtRating: 10,
            courtAddress: "Thailand",
            courtDescription: "Lorem Yipsum",
            courtPrice: 0,
            courtLat: "",
            courtLng: "",
            courtImageList: [
                { imageId: 1, imageUrl: "test", imageName: "" },
                { imageId: 2, imageUrl: "test", imageName: "" }
            ],
            courtFacilityList: [
                { facilityName: "Restroom", facilityImageUrl: "test.jpg" },
                { facilityName: "Snackbar", facilityImageUrl: "test.jpg" }
            ],
            courtReservedTeamList: [
                { teamId: 1, teamName: "team A", reservedDateTimeStart: new Date(), reservedDateTimeEnd: new Date(), reservedCapacity: 10, reservedRemaining: 10 },
                { teamId: 2, teamName: "team B", reservedDateTimeStart: new Date(), reservedDateTimeEnd: new Date(), reservedCapacity: 4, reservedRemaining: 5 }
            ],
            courtReviewList: [
                { reviewId: 1, reviewRating: 7, reviewDescription: "hello from the other side", reviewDateTime: new Date(), reviewBy: "Player 01" },
                { reviewId: 2, reviewRating: 2, reviewDescription: "Heh heh lets play", reviewDateTime: new Date(), reviewBy: "Player 02" }
            ]
        };

        const component = mountComponent(CourtDetail, props);

        expect(component.find(ImageList)).lengthOf(1);
        expect(component.find(Rating)).lengthOf(1);
        expect(component.find(TeamList)).lengthOf(1);
        expect(component.find(GoogleMap)).lengthOf(1);
        expect(component.find(ReviewList)).lengthOf(1);

    })

})