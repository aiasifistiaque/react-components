export const useCarousal = props => {
	let newArr = [];
	if (!props.children) {
		newArr.push({ image: '', caption: 'nthing is selected' });
		return newArr;
	}
	props.children.map((child, i) => {
		if (child.type.name == 'Slide') {
			let slideImage = '';
			let slideCaption = '';
			let slideSubTitle = '';
			let slideContent = '';
			child.props.children.map((grandChild, j) => {
				if (grandChild.type.name == 'SlideImage')
					slideImage = grandChild.props.src;
				if (grandChild.type.name == 'SlideCaption')
					slideCaption = grandChild.props.children;
				if (grandChild.type.name == 'SlideSubTitle')
					slideSubTitle = grandChild.props.children;
				if (grandChild.type.name == 'SlideContent')
					slideContent = grandChild.props.children;
			});
			newArr.push({
				image: slideImage,
				caption: slideCaption,
				subtitle: slideSubTitle,
				content: slideContent,
			});
		}
	});
	return newArr;
};
