import {env} from '../../env' 

export const formatting = (datas) => {

    const clientId = env.OAUTH['CLIENT_ID']
    const clientSecret = env.OAUTH['CLIENT_SECRET']

    return Object.assign({}, datas, {
        grant_type: 'refresh_token',
        refresh_token: datas.refresh_token,
        client_secret: clientSecret,
        client_id: clientId
    })
}

/*{
	"grant_type":"refresh_token",
	"refresh_token": "Sl4tEC5HgwHkasbXFKuiPAVvg60RGX",
	"client_secret": "LScNwQbr2LUEfIWh8XoaviBaic1CpYrh56sYpMAUJBsUqEss3S1Cb1WODn5urVHlJOfR2MgEguOgbD9UAlPuFxaXcsve78YHfVUOmLOIwmXosK5STmWvacuAlSN3WkQx",
	"client_id": "KQc8WR3ui5Jpd7FJqN4oBj22D3DzrofqZKF7e9ea"
}*/
